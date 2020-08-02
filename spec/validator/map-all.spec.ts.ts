import MapAll from "../../dist/validator/map-all";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import MessageMap from "../../dist/message/message/record/map";
import Instance from "@dikac/t-validator/parameter/instance/instance";
import Type from "@dikac/t-type/validator/type-standard";
import TypeClass from "@dikac/t-type/validator/type";
import TypeString from "@dikac/t-type/validatable/string/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

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

    describe("implicit complete", function() {

        let property = MapAll(validator, And, MessageMap);

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;

        let string : Type = validatable.value;
    });

    describe("explicit complete", function() {

        describe("auto", function() {

            let property = MapAll<globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>>(
                validator,
                And,
                MessageMap
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });

        describe("direct", function() {

            let property = MapAll<TypeValidator>(validator,
                (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
                MessageMap

            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });
    });
});


describe("implicit complete", function() {

    describe("all valid", function() {

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        let value = {
            user : 'user',
            name : 'name',
            address : 'address',
        };

        let property = MapAll(validator, (v)=>And(v), MessageMap);

        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('name valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('address valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('user valid');
        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('name valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('address valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('user valid');
        });

    });


    describe("mixed", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let value = {
            age : "11",
            name : 'name',
            address : 'address',
        };

        let property = MapAll(validator, (v)=>And(v), MessageMap);

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toBe(value);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('name valid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('11 invalid');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('address valid');

        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate(value);

            expect(or.valid).toBe(true);
            expect(or.value).toBe(value);

            expect(or.validatables.name.message).toBe('name valid');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('11 invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('address valid');
            expect(or.validatables.address.valid).toBe(true);

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

        let property = MapAll(validator, (v)=>And(v), MessageMap);

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('[object Object] invalid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('[object Object] invalid');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('[object Object] invalid');
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate(value);
            expect(or.valid).toBe(false);
            expect(or.value).toEqual(value);

            expect(or.validatables.name.message).toBe('[object Object] invalid');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('[object Object] invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('[object Object] invalid');
            expect(or.validatables.address.valid).toBe(false);
        });
    });
});







describe("recursive", function() {

    describe("all valid", function() {

        let validator = {
            name : new TypeClass('string', TypeString),
            address : Type('string'),
            user : Type('string'),
            info : MapAll({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>And(v), MessageMap)
        };


        let value = {
            user : 'user',
            name : 'name',
            address : 'address',
            info : {
                age : 5,
                hobby : 'string',
                no : 6,
            }
        };

        let property = MapAll(validator, (v)=>And(v), MessageMap);

        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('name valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('address valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('user valid');

            expect(validatable.validatables.info.valid).toBe(false);
            expect(validatable.validatables.info.value).toBe(value.info);

            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            expect(validatable.validatables.info.validatables.age.message).toBe('user valid');

            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            expect(validatable.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            expect(validatable.validatables.info.validatables.no.message).toBe('user valid');
        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(v);
            property.validators.info.validation = Or;

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('name valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('address valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('user valid');

            expect(validatable.validatables.info.valid).toBe(false);
            expect(validatable.validatables.info.value).toBe(value.info);

            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            expect(validatable.validatables.info.validatables.age.message).toBe('user valid');

            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            expect(validatable.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            expect(validatable.validatables.info.validatables.no.message).toBe('user valid');
        });

    });


    describe("mixed", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : MapAll({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>And(v), MessageMap)
        };

        let value = {
            age : "11",
            name : 'name',
            address : 'address',
            info : {
                age : '5',
                hobby : 'string',
                no : 6,
            }
        };

        let property = MapAll(validator, (v)=>And(v), MessageMap);

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toBe(value);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('name valid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('11 invalid');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('address valid');

            expect(and.validatables.info.valid).toBe(false);
            expect(and.validatables.info.value).toBe(value.info);

            expect(and.validatables.info.validatables.age.valid).toBe(false);
            expect(and.validatables.info.validatables.age.message).toBe('user valid');

            expect(and.validatables.info.validatables.hobby.valid).toBe(true);
            expect(and.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(and.validatables.info.validatables.no.valid).toBe(true);
            expect(and.validatables.info.validatables.no.message).toBe('user valid');

        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(v);
            property.validators.info.validation = Or;

            let or = property.validate(value);

            expect(or.valid).toBe(true);
            expect(or.value).toBe(value);

            expect(or.validatables.name.message).toBe('name valid');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('11 invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('address valid');
            expect(or.validatables.address.valid).toBe(true);

            expect(or.validatables.info.valid).toBe(true);
            expect(or.validatables.info.value).toBe(value.info);

            expect(or.validatables.info.validatables.age.valid).toBe(false);
            expect(or.validatables.info.validatables.age.message).toBe('user valid');

            expect(or.validatables.info.validatables.hobby.valid).toBe(true);
            expect(or.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(or.validatables.info.validatables.no.valid).toBe(true);
            expect(or.validatables.info.validatables.no.message).toBe('user valid');

        });
    });


    describe("all invalid", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : MapAll({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number'),
            },(v)=>And(v), MessageMap)
        };

        let value = {
            age : {},
            name : {},
            address : {},
            info : {
                age : {},
                hobby : {},
                no : {},
            }
        };

        let property = MapAll(validator, (v)=>And(v), MessageMap);

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('[object Object] invalid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('[object Object] invalid');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('[object Object] invalid');

            expect(and.validatables.info.valid).toBe(false);
            expect(and.validatables.info.value).toBe(value.info);

            expect(and.validatables.info.validatables.age.valid).toBe(false);
            expect(and.validatables.info.validatables.age.message).toBe('user valid');

            expect(and.validatables.info.validatables.hobby.valid).toBe(false);
            expect(and.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(and.validatables.info.validatables.no.valid).toBe(false);
            expect(and.validatables.info.validatables.no.message).toBe('user valid');
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(v);
            property.validators.info.validation = Or;

            let or = property.validate(value);
            expect(or.valid).toBe(false);
            expect(or.value).toEqual(value);

            expect(or.validatables.name.message).toBe('[object Object] invalid');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('[object Object] invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('[object Object] invalid');
            expect(or.validatables.address.valid).toBe(false);

            expect(or.validatables.info.valid).toBe(false);
            expect(or.validatables.info.value).toBe(value.info);

            expect(or.validatables.info.validatables.age.valid).toBe(false);
            expect(or.validatables.info.validatables.age.message).toBe('user valid');

            expect(or.validatables.info.validatables.hobby.valid).toBe(false);
            expect(or.validatables.info.validatables.hobby.message).toBe('user valid');

            expect(or.validatables.info.validatables.no.valid).toBe(false);
            expect(or.validatables.info.validatables.no.message).toBe('user valid');
        });
    });
});







