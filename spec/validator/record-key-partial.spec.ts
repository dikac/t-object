import Value from "../../dist/validator/record-key-partial";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type-standard";
import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Callbacks from "@dikac/t-validator/callbacks";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = Type('string');
    type TypeValidatorValue = ValidatorInterface<unknown, string, Instance<unknown, string>>;

    let value = {
        name : 'string',
        address : 'string',
    };

    describe("implicit partial", function() {

        let property = Value(validator, And, MessageMap);

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;

        let string : typeof value= validatable.value;

    });

    describe("explicit complete", function() {

        let property = Value/*<Record<PropertyKey, any>, Record<string, any>, TypeValidatorValue>*/(validator, And, MessageMap);

        let validatable = property.validate(value);


        let unknown : unknown = validatable.value;
        let string : typeof value = validatable.value;
    });
});

describe("implicit incomplete", function() {

    describe("all valid", function() {

        let validator = Type('string');

        let value = {
            name : 'string',
            address : 'string',
            user : 'string',
        };

        let property = Value(
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

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);
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

        let validator = new Callbacks<string, string>(function (value) {
            return  ['name', 'address'].includes(value);
        }, function (result){
            return result.value + ' ' + (result.valid ? 'valid' : 'true');
        }, );

        let value = {
            name : true,
            age : 1,
            address : 'string',
        };


        let property = Value(
            validator,
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toBe(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(and.validatables.name.message).toBe('name valid');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(and.validatables.age.message).toBe('age true');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let or = property.validate(value);

            expect(or.value).toBe(value);
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('name valid');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(or.validatables.age.message).toBe('age true');
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

        let validator = new Callbacks<string, string>(function (value) {
            return ! ['name', 'age', 'address'].includes(value);
        },function (result){
            return result.value + ' ' + (result.valid ? 'valid' : 'true');
        });

        let value = {
            name : 1,
            age : 1,
            address : 1,
        };


        let property = Value(
            validator,
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);


            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            if(and.validatables.name) {

                expect(and.validatables.name.valid).toBe(false);
                expect(and.validatables.name.message).toBe('name true');
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

            let or = property.validate(value);

            expect(or.value).toEqual(value);
            expect<boolean>(or.valid).toBe(false);

            if(or.validatables.name) {

                expect(or.validatables.name.message).toBe('name true');
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
