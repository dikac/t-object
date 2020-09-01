import Map from "../../dist/validator/map-partial";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/simple";
import MessageMap from "../../dist/message/message/record/map";
import RemoveUndefined from "../../dist/omit-undefined";
import Type from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/validatable/validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("explicit typed", function() {

        let validator = {
            name : Type('string'),
            address : Type('string'),
        };

        type TypeValidator = {
            name : ValidatorInterface<string, string, Instance<string, string>>,
            address :ValidatorInterface<string, string, Instance<string, string>>,
        };

        type Type = {
            name : string,
            address : string,
        }

        let value = {
            name : 'name',
            address : 'address',
        };


        describe("implicit", function() {

            let property = Map(validator, And, MessageMap);

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;

        });

        describe("auto", function() {

            let property = Map<
                globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>
                >(validator,
                And,
                (v)=>MessageMap(RemoveUndefined(v))
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = Map<TypeValidator>(validator, And, (v)=>MessageMap(RemoveUndefined(v)));

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });
    });


});

describe("implicit incomplete", function() {

    describe("all valid", function() {

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        let value = {
            name : 'name',
            address : 'age',
            user : 'address',
        };

        let property = Map(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(typeof validatable.validatables.name.message).toBe('string');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(typeof validatable.validatables.address.message).toBe('string');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(typeof validatable.validatables.user.message).toBe('string');

            } else {

                fail('validatable.validatables.user should exist');
            }

        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(typeof validatable.validatables.name.message).toBe('string');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(typeof validatable.validatables.address.message).toBe('string');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(typeof validatable.validatables.user.message).toBe('string');

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

        let value = {
            name : 'name',
            age : "15",
            address : 'address',
        };

        let property = Map(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toBe(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(typeof and.validatables.name.message).toBe('string');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(typeof and.validatables.age.message).toBe('string');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);

            let or = property.validate(value);
            expect(or.value).toBe(value);
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(typeof or.validatables.name.message).toBe('string');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(typeof or.validatables.age.message).toBe('string');
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

        let value = {
            name : {},
            age : {},
            address : {},
        };

        let property = Map(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(false);
                expect(typeof and.validatables.name.message).toBe('string');
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

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);

            let or = property.validate(value);

            expect(or.value).toEqual(value);
            expect(or.valid).toBe(false);

            if(or.validatables.name) {
                expect(typeof or.validatables.name.message).toBe('string');
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
            info : Map({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>And(v), MessageMap)
        };

        let value = {
            name : 'name',
            address : 'age',
            user : 'address',
            info : {
                age : 5,
                hobby : 'string',
                no : 6,
            }
        };

        let property = Map(validator,
            (v)=>And(v),
            MessageMap
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(typeof validatable.validatables.name.message).toBe('string');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(typeof validatable.validatables.address.message).toBe('string');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(typeof validatable.validatables.user.message).toBe('string');

            } else {

                fail('validatable.validatables.user should exist');
            }

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe(value.info);

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.age.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.no.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }
        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(v);
            property.validators.info.validation = (v)=>Or(v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(typeof validatable.validatables.name.message).toBe('string');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(typeof validatable.validatables.address.message).toBe('string');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(typeof validatable.validatables.user.message).toBe('string');

            } else {

                fail('validatable.validatables.user should exist');
            }

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe(value.info);

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.age.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.no.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

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
            info : Map({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>And(v), MessageMap)
        };

        let value = {
            name : 'name',
            age : "15",
            address : 'address',
            info : {
                age : 5,
                hobby : 7,
                no : 6,
            }
        };

        let property = Map(validator,
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toBe(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(typeof and.validatables.name.message).toBe('string');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(typeof and.validatables.age.message).toBe('string');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }


            if(and.validatables.info) {
                fail('validatable.validatables.info should not exist');
            }
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(v);
            property.validators.info.validation = (v)=>Or(v);

            let or = property.validate(value);
            expect(or.value).toBe(value);
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(typeof or.validatables.name.message).toBe('string');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(typeof or.validatables.age.message).toBe('string');
                expect(or.validatables.age.valid).toBe(false);
            } else {
                fail('validatable.validatables.age should exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should exist');
            }

            if(or.validatables.info) {

                 fail('validatable.validatables.info should not exist');
            }
        });
    });


    describe("all invalid", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : Map({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>And(v), MessageMap)
        };

        let value = {
            name : {},
            age : {},
            address : {},
            info : {
                age : {},
                hobby : {},
                no : {},
            }
        };

        let property = Map(validator,
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(false);
                expect(typeof and.validatables.name.message).toBe('string');
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

            property.validation = (v)=>Or(v);
            property.validators.info.validation = (v)=>Or(v);

            let or = property.validate(value);

            expect(or.value).toEqual(value);
            expect(or.valid).toBe(false);

            if(or.validatables.name) {
                expect(typeof or.validatables.name.message).toBe('string');
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
                fail('validatable.validatables.info should not exist');
            }
        });
    });
});

