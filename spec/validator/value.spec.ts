import Value from "../../dist/validator/value";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type-standard";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
    };

    describe("implicit partial", function() {

        let property = new Value(validator, (v)=>And(v), MessageMap);

        let validatable = property.validate('data');

        let unknown : unknown = validatable.value;
        // @ts-expect-error
        let string : string = validatable.value;

    });

    describe("explicit complete", function() {

        let property = new Value<string, string, {name : string, address : string}, typeof validator>(validator,
            (v)=>And(v),
            (v)=><any>MessageMap(<any>v)
        );

        let validatable = property.validate('data');


        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });
});

describe("implicit incomplete", function() {

    describe("all valid", function() {

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        let value = 'data';

        let property = new Value(
            validator,
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.user should exist');
            }

        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.user should exist');
            }
        });
    });


    describe("mixed", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let property = new Value(
            validator,
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate('data');

            expect(and.valid).toBe(false);
            expect(and.value).toBe('data');

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(and.validatables.name.message).toBe('value is type of "string"');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(and.validatables.age.message).toBe('value is not type of "number"');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let or = property.validate('data');
            expect(or.value).toBe('data');
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('value is type of "string"');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(or.validatables.age.message).toBe('value is not type of "number"');
                expect(or.validatables.age.valid).toBe(false);
            } else {
                fail('validatable.validatables.age should exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should exist');
            }

        });
    });


    describe("all invalid", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };


        let property = new Value(
            validator,
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate({});



            expect(and.valid).toBe(false);
            expect(and.value).toEqual({});

            if(and.validatables.name) {

                expect(and.validatables.name.valid).toBe(false);
                expect(and.validatables.name.message).toBe('value is not type of "string"');
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                fail('validatable.validatables.age should not exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should not exist');
            }
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let or = property.validate({});

            expect(or.value).toEqual({});
            expect(or.valid).toBe(false);

            if(or.validatables.name) {

                expect(or.validatables.name.message).toBe('value is not type of "string"');
                expect(or.validatables.name.valid).toBe(false);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                fail('validatable.validatables.age should not exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should not exist');
            }

        });
    });
});



describe("recursive", function() {

    describe("all valid", function() {

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
            info : new Value({
                age : Type('string'),
                hobby : Type('string'),
                no : Type('string'),
            }, (v)=>And(v), MessageMap)
        };

        let value = 'data';

        let property = new Value(
            validator,
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.user should exist');
            }

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe(value);

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.age.valid).toBe(true);
                // @ts-expect-error
                expect(validatable.validatables.info.validatables.age.message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
                // @ts-expect-error
                expect(validatable.validatables.info.validatables.hobby.message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.no.valid).toBe(true);
                // @ts-expect-error
                expect(validatable.validatables.info.validatables.no.message).toBe('value is type of "string"');


            } else {

                fail('validatable.validatables.info should exist');
            }

        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);
            property.validators.info.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.user should exist');
            }

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe(value);

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.age.valid).toBe(true);
                // @ts-expect-error
                expect(validatable.validatables.info.validatables.age.message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
                // @ts-expect-error
                expect(validatable.validatables.info.validatables.hobby.message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.no.valid).toBe(true);
                // @ts-expect-error
                expect(validatable.validatables.info.validatables.no.message).toBe('value is type of "string"');


            } else {

                fail('validatable.validatables.info should exist');
            }
        });


    });


    describe("mixed", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : new Value({
                age : Type('string'),
                hobby : Type('number'),
                no : Type('string'),
            }, (v)=>And(v), MessageMap)
        };

        let property = new Value(
            validator,
            (v)=>And(<Record<PropertyKey, Validatable>>v), MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate('data');

            expect(and.valid).toBe(false);
            expect(and.value).toBe('data');

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(and.validatables.name.message).toBe('value is type of "string"');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(and.validatables.age.message).toBe('value is not type of "number"');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }

            if(and.validatables.info) {
                fail('validatable.validatables.info should exist');
            }
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);
            property.validators.info.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let or = property.validate('data');
            expect(or.value).toBe('data');
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('value is type of "string"');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(or.validatables.age.message).toBe('value is not type of "number"');
                expect(or.validatables.age.valid).toBe(false);
            } else {
                fail('validatable.validatables.age should exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should exist');
            }

            if(or.validatables.info) {

                fail('validatable.validatables.info should exist');
            }

        });
    });


    describe("all invalid", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : new Value({
                age : Type('string'),
                hobby : Type('number'),
                no : Type('string'),
            }, (v)=>And(v), MessageMap)
        };


        let property = new Value(
            validator,
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate({});

            expect(and.valid).toBe(false);
            expect(and.value).toEqual({});

            if(and.validatables.name) {

                expect(and.validatables.name.valid).toBe(false);
                expect(and.validatables.name.message).toBe('value is not type of "string"');
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                fail('validatable.validatables.age should not exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should not exist');
            }

            if(and.validatables.info) {
                fail('validatable.validatables.info should exist');
            }
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);
            property.validators.info.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let or = property.validate({});

            expect(or.value).toEqual({});
            expect(or.valid).toBe(false);

            if(or.validatables.name) {

                expect(or.validatables.name.message).toBe('value is not type of "string"');
                expect(or.validatables.name.valid).toBe(false);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                fail('validatable.validatables.age should not exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should not exist');
            }

            if(or.validatables.info) {

                fail('validatable.validatables.info should exist');
            }

        });
    });
});


