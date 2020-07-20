import Validator from "../../validator/factory";
import Filtered from "../../../dist/recursive/validator/filtered";
import Valid from "../../../dist/validatable/recursive/valid";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = {
        name : new Validator('string'),
        address : new Validator('string'),
    };

    let property = new Filtered(validator, Valid, false);

    let validatable = property.validate({
        name : 'name data',
        address : 'address data',
    });

    it(`valid`, () => {

        expect(validatable.valid).toBe(true);

        if(validatable.validatable && validatable.validatable.name) {
            expect(validatable.validatable.name.valid).toBe(true);
        }

        if(validatable.validatable && validatable.validatable.address) {
            expect(validatable.validatable.address.valid).toBe(true);
        }

    });

    it(`message equal`, () => {

        if(validatable.validatable && validatable.validatable.name) {
            expect(validatable.validatable.name.message).toBe('name data valid');

        }

        if(validatable.validatable && validatable.validatable.address) {
            expect(validatable.validatable.address.message).toBe('address data valid');
        }
    });

    it(`message value`, () => {

        if(validatable.validatable && validatable.value.name) {
            expect(validatable.value.name).toBe('name data');
        }

        if(validatable.validatable && validatable.value.address) {
            expect(validatable.value.address).toBe('address data');
        }
    });


});


describe("deep", function() {

    let validator = {
        name : new Validator('string'),
        addresses : new Filtered({
            address1 :new Validator('string'),
            address2 :new Validator('string'),
        }, Valid, true),
    };

    let property = new Filtered(validator, Valid, false);

    let validatable = property.validate({
        name : 'name',
        addresses : {
            address1: 'address1',
            address2: 'address2',
        }
    });

    it(`valid`, () => {

        expect(validatable.valid).toBe(true);

        if(validatable.validatable.name) {
            expect(validatable.validatable.name.valid).toBe(true);
        }

        if(validatable.validatable.addresses && validatable.validatable.addresses.validatable.address1) {
            expect(validatable.validatable.addresses.validatable.address1.valid).toBe(true);
        }

        if(validatable.validatable.addresses && validatable.validatable.addresses.validatable.address2) {
            expect(validatable.validatable.addresses.validatable.address2.valid).toBe(true);
        }
    });

    it(`message equal`, () => {

        if(validatable.validatable.name) {
            expect(validatable.validatable.name.message).toBe('name valid');
        }

        if(validatable.validatable.addresses && validatable.validatable.addresses.validatable.address1) {
            expect(validatable.validatable.addresses.validatable.address1.message).toBe('address1 valid');
        }

        if(validatable.validatable.addresses && validatable.validatable.addresses.validatable.address2) {
            expect(validatable.validatable.addresses.validatable.address2.message).toBe('address2 valid');
        }
    });

    it(`message value`, () => {

        if(validatable.value.name) {
            expect(validatable.value.name).toBe('name');
        }

        if(validatable.value.addresses && validatable.value.addresses.address1) {
            expect(validatable.value.addresses.address1).toBe('address1');
        }

        if(validatable.value.addresses && validatable.value.addresses.address2) {
            expect(validatable.value.addresses.address2).toBe('address2');
        }
    });

});



