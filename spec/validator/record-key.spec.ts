import RecordValueCallback from "../../dist/validator/record-key";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import MessageMap from "../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/validatable/validatable";
import Callbacks from "@dikac/t-validator/callbacks";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    type TypeValidatorValue = ValidatorInterface<PropertyKey, string, Instance<PropertyKey, string>>;

    let validator = Type("string");

    type Type = {
        name : string,
        address : string,
    }

    let value = {
        name : 'name',
        address : 'address',
    };

    describe("implicit", function() {

        let property = RecordValueCallback(validator, And, MessageMap);

        let validatable = property.validate(value);

        if(validatable.valid) {

            let string : Type = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
        }

    });

    describe("explicit complete", function() {

        describe("auto", function() {

            let property = RecordValueCallback<Record<PropertyKey, any>, Record<string, any>, TypeValidatorValue>(validator,
                (v)=>And(v),
                MessageMap
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });

        describe("direct", function() {

            let property = RecordValueCallback<Record<PropertyKey, any>, Record<string, any>, TypeValidatorValue>(validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                MessageMap
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });
    });

    describe("implicit partial", function() {

        let property = RecordValueCallback(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;
        let val : Type = validatable.value;

    });

    describe("explicit complete", function() {

        describe("auto", function() {

            let property = RecordValueCallback<Record<PropertyKey, any>, Record<string, any>, TypeValidatorValue>(
                validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                MessageMap
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = RecordValueCallback<Record<PropertyKey, any>, Record<string, any>, TypeValidatorValue>(
                validator,
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, Message>>v)
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });
    });
});





describe("implicit complete", function() {

    describe("all valid", function() {

        let validator = Type('string');

        let property =  RecordValueCallback(validator,
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let value = {
                name : 'string',
                address : 'string',
                user : 'string',
            };

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

            let value = {
                name : 'string',
                address : 'string',
                user : 'string',
            };

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

        let validator = new Callbacks<string, string>(function (value) {
            return  ['name', 'address'].includes(value);
        }, function (result){
            return result.value + ' ' + (result.valid ? 'valid' : 'true');
        }, );

        let value = {
            name : 'string',
            age : 'string',
            address : 'string',
        };

        let property = RecordValueCallback(validator,
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect<boolean>(and.valid).toBe(false);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('name valid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('age true');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('address valid');

            expect(and.value).toBe(value);
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate(value);

            expect(or.valid).toBe(true);
            expect(or.value).toBe(value);

            expect(or.validatables.name.message).toBe('name valid');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('age true');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('address valid');
            expect(or.validatables.address.valid).toBe(true);

        });
    });


    describe("all invalid", function() {

        let validator = new Callbacks<string, string>(function (value) {
            return ! ['name', 'age', 'address'].includes(value);
        },function (result){
            return result.value + ' ' + (result.valid ? 'valid' : 'true');
        }, );

        let property = RecordValueCallback(validator,
            (v)=>And(v),
            MessageMap
        );

        let value = {
            name : 'string',
            age : 'string',
            address : 'string',
        };

        it(`and validation`, () => {

            let and = property.validate(value);

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('name true');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('age true');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('address true');
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate(value);

            expect<boolean>(or.valid).toBe(false);
            expect(or.value).toEqual(value);

            expect(or.validatables.name.message).toBe('name true');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('age true');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('address true');
            expect(or.validatables.address.valid).toBe(false);
        });
    });
});
