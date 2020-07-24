import Validator from "../../validator/factory";
import ValueCallback from "../../../dist/record/validator/value-callback";
import ValidateValue from "../../../dist/validator/validatable/record/value";
import And from "../../../dist/record/validatable/and";
import Or from "../../../dist/record/validatable/or";
import ValidatablesInterface from "../../../dist/record/validatables/validatables";
import Validatables from "../../../dist/record/validatable/validatables";
import ValidatorValidatable from "../../../dist/validator/validatable/record/record";
import Validatable from "@dikac/t-validatable/validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = {
        name : new Validator('string'),
        address : new Validator('string'),
    };

    describe("implicit complete", function() {

        let property = new ValueCallback(validator, (value, validators) => ValidateValue(value, validators, false), (v)=>And(v));

        let validatable = property.validate('data');


        let key : Validatable = validatable.validatables.name;
        let validatables : ValidatablesInterface = validatable;
        let record : Record<PropertyKey, Validatable> = validatable.validatables;
        let and : Validatables = validatable.validatable;

        let unknown : unknown = validatable.value;
        // @ts-expect-error
        let string : string = validatable.value;

    });

    describe("explicit complete", function() {

        let property = new ValueCallback<string>(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v)
        );

        let validatable = property.validate('data');

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });

    describe("implicit partial", function() {

        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
            (v)=>And(<Record<PropertyKey, Validatable>>v)
        );

        let validatable = property.validate('data');

        let unknown : unknown = validatable.value;
        // @ts-expect-error
        let string : string = validatable.value;

    });

    describe("explicit complete", function() {

        let property = new ValueCallback<string>(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
            (v)=>And(<Record<PropertyKey, Validatable>>v)
        );

        let validatable = property.validate('data');


        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });
});


describe("implicit complete", function() {

    describe("all valid", function() {

        let validator = {
            name : new Validator('string'),
            address : new Validator('string'),
            user : new Validator('string'),
        };

        let value = 'data';

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v)
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('data valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('data valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('data valid');
        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables.name.valid).toBe(true);
            expect(validatable.validatables.name.message).toBe('data valid');

            expect(validatable.validatables.address.valid).toBe(true);
            expect(validatable.validatables.address.message).toBe('data valid');

            expect(validatable.validatables.user.valid).toBe(true);
            expect(validatable.validatables.user.message).toBe('data valid');
        });

    });


    describe("mixed", function() {

        let validator = {
            name : new Validator('string'),
            age : new Validator('number'),
            address : new Validator('string'),
        };

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v)
        );

        it(`and validation`, () => {

            let and = property.validate('data');

            expect(and.valid).toBe(false);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('data valid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('data invalid');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('data valid');

            expect(and.value).toBe('data');
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate('data');

            expect(or.valid).toBe(true);
            expect(or.value).toBe('data');

            expect(or.validatables.name.message).toBe('data valid');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('data invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('data valid');
            expect(or.validatables.address.valid).toBe(true);

        });
    });


    describe("all invalid", function() {

        let validator = {
            name : new Validator('string'),
            age : new Validator('number'),
            address : new Validator('string'),
        };

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v)
        );

        it(`and validation`, () => {

            let and = property.validate({});

            expect(and.valid).toBe(false);
            expect(and.value).toEqual({});

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('[object Object] invalid');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('[object Object] invalid');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('[object Object] invalid');
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate({});
            expect(or.valid).toBe(false);
            expect(or.value).toEqual({});

            expect(or.validatables.name.message).toBe('[object Object] invalid');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('[object Object] invalid');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('[object Object] invalid');
            expect(or.validatables.address.valid).toBe(false);
        });
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

        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
            (v)=>And(<Record<PropertyKey, Validatable>>v)
        );


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

        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
            (v)=>And(<Record<PropertyKey, Validatable>>v)
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


        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValue(value, validators, true),
            (v)=>And(<Record<PropertyKey, Validatable>>v)
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


