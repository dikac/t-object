import Validator from "../../validator/factory";
import Record from "../../../dist/recursive/validator/value";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = {
        name : new Validator('string'),
        address : new Validator('string'),
    };

    let property = new Record(validator);

    let validatable = property.validate('data');

    it(`valid`, () => {

        expect(validatable.valid).toBe(true);
        expect(validatable.validation.name.valid).toBe(true);
        expect(validatable.validation.address.valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable.validation.name.message).toBe('data valid');
        expect(validatable.validation.address.message).toBe('data valid');
    });

    it(`value`, () => {

        expect(validatable.value).toBe('data');

    });


});


describe("deep", function() {

    let validator = {
        name : new Validator('string'),
        addresses : new Record({
            address1 :new Validator('string'),
            address2 :new Validator('string'),
        }),
    };

    let property = new Record(validator);

    let validatable = property.validate('data');

    it(`valid`, () => {

        expect(validatable.valid).toBe(true);
        expect(validatable.validation.name.valid).toBe(true);
        expect(validatable.validation.addresses.validation.address1.valid).toBe(true);
        expect(validatable.validation.addresses.validation.address2.valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable.validation.name.message).toBe('data valid');
        expect(validatable.validation.addresses.validation.address1.message).toBe('data valid');
        expect(validatable.validation.addresses.validation.address2.message).toBe('data valid');
    });

    it(`value`, () => {

        expect(validatable.value).toBe('data');

    });

});



