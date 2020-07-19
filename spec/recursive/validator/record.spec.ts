import Validator from "../../validator/factory";
import Record from "../../../dist/recursive/validator/record";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = {
        name : new Validator('string'),
        address : new Validator('string'),
    };

    let property = new Record(validator);

    let validatable = property.validate({
        name : 'name data',
        address : 'address data',
    });

    it(`valid`, () => {

        expect(validatable.valid).toBe(true);
        expect(validatable.validatable.name.valid).toBe(true);
        expect(validatable.validatable.address.valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable.validatable.name.message).toBe('name data valid');
        expect(validatable.validatable.address.message).toBe('address data valid');
    });

    it(`message value`, () => {

        expect(validatable.value.name).toBe('name data');
        expect(validatable.value.address).toBe('address data');
    });


});


describe("deep", function() {

    let validator = {
        name : new Validator('string'),
        addresses : {
            address1 :new Validator('string'),
            address2 :new Validator('string'),
        },
    };

    let property = new Record(validator);

    let validatable = property.validate({
        name : 'name',
        addresses : {
            address1: 'address1',
            address2: 'address2',
        }
    });

    it(`valid`, () => {

        expect(validatable.valid).toBe(true);
        expect(validatable.validatable.name.valid).toBe(true);
        expect(validatable.validatable.addresses.address1.valid).toBe(true);
        expect(validatable.validatable.addresses.address2.valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable.validatable.name.message).toBe('name valid');
        expect(validatable.validatable.addresses.address1.message).toBe('address1 valid');
        expect(validatable.validatable.addresses.address2.message).toBe('address2 valid');
    });

    it(`message value`, () => {

        expect(validatable.value.name).toBe('name');
        expect(validatable.value.addresses.address1).toBe('address1');
        expect(validatable.value.addresses.address2).toBe('address2');
    });

});



