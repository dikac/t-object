import ValueCallback from "../../dist/validator/value-callback";
import ValidateValue from "../../dist/validator/return/record/value";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import ValidatablesInterface from "../../dist/validatable/validatables/validatables";
import Validatables from "../../dist/validatable/validatables";
import ValidatorValidatable from "../../dist/validator/return/record/infer";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../dist/message/return/record/map";
import Type from "@dikac/t-type/validator/type-standard";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
    };

    describe("implicit complete", function() {

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators, false), (v)=>And(v),
            MessageMap
        );

        let validatable = property.validate('data');


        let key : Validatable = validatable.validatables.name;
        let validatables : ValidatablesInterface = validatable;
        let record : Record<PropertyKey, Validatable> = validatable.validatables;
        let and : Validatables = validatable.validatable;

        let unknown : unknown = validatable.value;
        // @ts-expect-error
        let string : string = validatable.value;

    });

    describe("explicit complete", function() {

        let property = new ValueCallback<string>(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property.validate('data');

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });

    describe("implicit partial", function() {

        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property.validate('data');

        let unknown : unknown = validatable.value;
        // @ts-expect-error
        let string : string = validatable.value;

    });

    describe("explicit complete", function() {

        let property = new ValueCallback<string>(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property.validate('data');


        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });
});


describe("implicit complete", function() {

    describe("all valid", function() {

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        let value = 'data';

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v),
            MessageMap
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('value is type of "string"');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('value is type of "string"');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('value is type of "string"');
        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('value is type of "string"');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('value is type of "string"');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('value is type of "string"');
        });

    });


    describe("mixed", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate('data');

            expect(and.valid).toBe(false);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('value is type of "string"');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('value is not type of "number"');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('value is type of "string"');

            expect(and.value).toBe('data');
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate('data');

            expect(or.valid).toBe(true);
            expect(or.value).toBe('data');

            expect(or.validatables.name.message).toBe('value is type of "string"');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('value is not type of "number"');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('value is type of "string"');
            expect(or.validatables.address.valid).toBe(true);

        });
    });


    describe("all invalid", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate({});

            expect(and.valid).toBe(false);
            expect(and.value).toEqual({});

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('value is not type of "string"');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('value is not type of "number"');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('value is not type of "string"');
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate({});
            expect(or.valid).toBe(false);
            expect(or.value).toEqual({});

            expect(or.validatables.name.message).toBe('value is not type of "string"');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('value is not type of "number"');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('value is not type of "string"');
            expect(or.validatables.address.valid).toBe(false);
        });
    });
});


describe("implicit incomplete", function() {

    describe("all valid", function() {


        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
            info : new ValueCallback({
                age : Type('string'),
                hobby : Type('string'),
                no : Type('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
                (v)=>And(v),
                MessageMap)
        };

        let value = 'data';

        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
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

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe('data');

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
                expect(validatable.validatables.info.value).toBe('data');

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
            info : new ValueCallback({
                age : Type('string'),
                hobby : Type('number'),
                no : Type('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
            (v)=>And(v),
            MessageMap)
        };

        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
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
            info : new ValueCallback({
                    age : Type('string'),
                    hobby : Type('number'),
                    no : Type('string'),
                }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
                (v)=>And(v),
                MessageMap)
        };


        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
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


