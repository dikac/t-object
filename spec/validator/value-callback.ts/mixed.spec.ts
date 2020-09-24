import Type from "@dikac/t-type/validator/type-standard";
import ValueCallback from "../../../dist/validator/value-callback";
import ValidateValue from "../../../dist/validator/validatable/record/value";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Or from "../../../dist/validatable/or";
import ValidatorValidatable from "../../../dist/validator/validatable/record/infer";
import ValidateValuePartial from "../../../dist/validator/validatable/record/value-partial";
import Validatable from "@dikac/t-validatable/validatable";
import Infer from "../../../dist/validator/validatable/record/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
    };

    type Messages = {
        name : string,
        address : string,
        age : string,
    }

    // TODO FIX FORCED ARROW FUNCTION?
    let property = new ValueCallback<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValidateValue, And, result => MessageMap(result));

    it(`and validation`, () => {

        let and = property.validate('data');

        expect<boolean>(and.valid).toBe(false);

        expect(and.validatables.name.valid).toBe(true);
        expect(typeof and.validatables.name.message).toBe('string');

        expect(and.validatables.age.valid).toBe(false);
        expect(typeof and.validatables.age.message).toBe('string');

        expect(and.validatables.address.valid).toBe(true);
        expect(typeof and.validatables.address.message).toBe('string');

        expect(and.value).toBe('data');
    });


    it(`or validation `, () => {

        property.validation = (v)=>Or(v);

        let or = property.validate('data');

        expect(or.valid).toBe(true);
        expect(or.value).toBe('data');

        expect(typeof or.validatables.name.message).toBe('string');
        expect(or.validatables.name.valid).toBe(true);

        expect(typeof or.validatables.age.message).toBe('string');
        expect(or.validatables.age.valid).toBe(false);

        expect(typeof or.validatables.address.message).toBe('string');
        expect(or.validatables.address.valid).toBe(true);

    });
});


describe("recursive", function() {

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
        info : new ValueCallback({
                age : Type('string'),
                hobby : Type('number'),
                no : Type('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
            (v)=>And(v),
            MessageMap)
    };

    let property = new ValueCallback(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    it(`and validation`, () => {

        let and = property.validate('data');

        expect<boolean>(and.valid).toBe(false);
        expect(and.value).toBe('data');

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


            fail('validatable.validatables.info should exist');
        }

    });
});
