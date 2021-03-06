import Type from "@dikac/t-type/validator/type-standard";
import RecordValueCallback from "../../../dist/validator/record-value-callback";
import ValidateValue from "../../../dist/validator/validatable/record/record-value";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Or from "../../../dist/validatable/or";
import Infer from "@dikac/t-validator/validatable/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = Type('string');

    let property = new RecordValueCallback<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, ValidateValue, And, MessageMap);

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
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
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
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
    });
});
