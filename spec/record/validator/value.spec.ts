import Validator from "../../validator/factory";
import Value from "../../../dist/record/validator/value";
import And from "../../../dist/record/validatable/and";
import Or from "../../../dist/record/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = {
        name : new Validator('string'),
        address : new Validator('string'),
    };


    describe("implicit partial", function() {

        let property = new Value(validator, (v)=>And(<Record<PropertyKey, Validatable>>v));

        let validatable = property.validate('data');

        let unknown : unknown = validatable.value;
        // @ts-expect-error
        let string : string = validatable.value;

    });

    describe("explicit complete", function() {

        let property = new Value<string>(validator, (v)=>And(<Record<PropertyKey, Validatable>>v));

        let validatable = property.validate('data');


        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });
});

describe("implicit incomplete", function() {

    describe("all valid", function() {


        let validator = {
            name : new Validator('string'),
            address : new Validator('string'),
            user : new Validator('string'),
        };

        let value = 'data';

        let property = new Value(validator, (v)=>And(<Record<PropertyKey, Validatable>>v));


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('data valid');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('data valid');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('data valid');

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
                expect(validatable.validatables.name.message).toBe('data valid');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('data valid');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('data valid');

            } else {

                fail('validatable.validatables.user should exist');
            }
        });
    });


    describe("mixed", function() {

        let validator = {
            name : new Validator('string'),
            age : new Validator('number'),
            address : new Validator('string'),
        };

        let property = new Value(validator, (v)=>And(<Record<PropertyKey, Validatable>>v)
        );

        it(`and validation`, () => {

            let and = property.validate('data');

            expect(and.valid).toBe(false);
            expect(and.value).toBe('data');

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(and.validatables.name.message).toBe('data valid');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(and.validatables.age.message).toBe('data invalid');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let or = property.validate('data');
            expect(or.value).toBe('data');
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('data valid');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(or.validatables.age.message).toBe('data invalid');
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

        let validator = {
            name : new Validator('string'),
            age : new Validator('number'),
            address : new Validator('string'),
        };


        let property = new Value(validator,(v)=>And(<Record<PropertyKey, Validatable>>v)
        );

        it(`and validation`, () => {

            let and = property.validate({});



            expect(and.valid).toBe(false);
            expect(and.value).toEqual({});

            if(and.validatables.name) {

                expect(and.validatables.name.valid).toBe(false);
                expect(and.validatables.name.message).toBe('[object Object] invalid');
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

            let or = property.validate({});

            expect(or.value).toEqual({});
            expect(or.valid).toBe(false);

            if(or.validatables.name) {

                expect(or.validatables.name.message).toBe('[object Object] invalid');
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


