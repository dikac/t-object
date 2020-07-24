import Validator from "../../validator/factory";
import MapAll from "../../../dist/record/validator/map-all";
import And from "../../../dist/record/validatable/and";
import Or from "../../../dist/record/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = {
        name : new Validator('string'),
        address : new Validator('string'),
    };

    type TypeValidator = {
        name : ValidatorInterface<string, Validatable & Message<string>>,
        address :ValidatorInterface<string, Validatable & Message<string>>,
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

        let property = new MapAll(validator, And);

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;

        // @ts-expect-error
        let string : Type = validatable.value;

    });

    describe("explicit complete", function() {

        describe("auto", function() {

            let property = new MapAll<globalThis.Record<keyof typeof validator, ValidatorInterface<string, Validatable & Message<string>>>>(
                validator,
                (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v)
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });

        describe("direct", function() {

            let property = new MapAll<TypeValidator>(validator,
                (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v)
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
            name : new Validator('string'),
            address : new Validator('string'),
            user : new Validator('string'),
        };

        type TypeValidator = {
            name : ValidatorInterface<string, Validatable & Message<string>>,
            user :ValidatorInterface<string, Validatable & Message<string>>,
            address :ValidatorInterface<string, Validatable & Message<string>>,
        };

        type Type = {
            user : string,
            address : string,
            name : string,
        }

        let value = {
            user : 'user',
            name : 'name',
            address : 'address',
        };

        let property = new MapAll(validator, (v)=>And(v));

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
            name : new Validator('string'),
            age : new Validator('number'),
            address : new Validator('string'),
        };

        let value = {
            age : "11",
            name : 'name',
            address : 'address',
        };

        let property = new MapAll(validator, (v)=>And(v));

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
            name : new Validator('string'),
            age : new Validator('number'),
            address : new Validator('string'),
        };

        let value = {
            name : {},
            age : {},
            address : {},
        };

        let property = new MapAll(validator, (v)=>And(v));

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

