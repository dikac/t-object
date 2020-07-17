import Validator from "../../validator/factory";
import Record from "../../../dist/record/validator/record";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = {
        name : new Validator('string'),
        address : new Validator('string'),
    };

    let property = new Record(validator);

    let validatable = property.validate({
        name : 'name',
        address : 'address',
    });

    it(`valid`, () => {

        expect(validatable.valid).toBe(true);
        expect(validatable.value.name.valid).toBe(true);
        expect(validatable.value.address.valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable.value.name.message).toBe('name valid');
        expect(validatable.value.address.message).toBe('address valid');
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
        expect(validatable.value.name.valid).toBe(true);
        expect(validatable.value.addresses.address1.valid).toBe(true);
        expect(validatable.value.addresses.address2.valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable.value.name.message).toBe('name valid');
        expect(validatable.value.addresses.address1.message).toBe('address1 valid');
        expect(validatable.value.addresses.address2.message).toBe('address2 valid');
    });


});



