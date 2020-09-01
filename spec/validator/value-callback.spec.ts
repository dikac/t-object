import ValueCallback from "../../dist/validator/value-callback";
import ValidateValue from "../../dist/validator/validatable/record/value";
import ValidateValuePartial from "../../dist/validator/validatable/record/value-partial";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import ValidatablesInterface from "../../dist/validatable/validatables/validatables";
import Validatables from "../../dist/validatable/validatables";
import ValidatorValidatable from "../../dist/validator/validatable/record/infer";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type-standard";
import Message from "@dikac/t-message/message";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
    };

    describe("implicit complete", function() {

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators),
            And,
            MessageMap
        );

        let validatable = property.validate('data');

        describe("implicit complete", function() {

            let key : Validatable = validatable.validatables.name;
            key = validatable.validatables.address;

            let validatables : ValidatablesInterface = validatable;

            let record : Record<PropertyKey, Validatable> = validatable.validatables;

            // @ts-expect-error
            let and : Validatables = validatable.validatables;

            if(validatable.valid) {

                let unknown : unknown = validatable.value;
                let string : string = validatable.value;

            } else {

                let unknown : unknown = validatable.value;
                let string : string = validatable.value;
            }
        });
    });

    describe("explicit complete", function() {

        let property = new ValueCallback<string>(validator,
            (value, validators) => ValidateValue(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property.validate('data');

        if(validatable.valid) {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;
        }

    });

    describe("implicit partial", function() {

        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property.validate('data');

        if(validatable.valid) {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;
        }

    });

    describe("explicit complete", function() {

        let property = new ValueCallback<unknown, string>(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            (v) => MessageMap(<Record<PropertyKey, Message>>v)
        );

        let validatable = property.validate('data');

        if(validatable.valid) {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;
        }

    });
});


describe("implicit complete", function() {

    describe("all valid", function() {

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        let value = 'data';

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators),
            (v)=>And(v),
            MessageMap
        );


        it(`and validation`, () => {

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


    describe("mixed", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators),
            (v)=>And(v),
            MessageMap
        );

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


    describe("all invalid", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let property = new ValueCallback(validator,
            (value, validators) => ValidateValue(value, validators),
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate({});

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual({});

            expect(and.validatables.name.valid).toBe(false);
            expect(typeof and.validatables.name.message).toBe('string');

            expect(and.validatables.age.valid).toBe(false);
            expect(typeof and.validatables.age.message).toBe('string');

            expect(and.validatables.address.valid).toBe(false);
            expect(typeof and.validatables.address.message).toBe('string');
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate({});
            expect<boolean>(or.valid).toBe(false);
            expect(or.value).toEqual({});

            expect(typeof or.validatables.name.message).toBe('string');
            expect(or.validatables.name.valid).toBe(false);

            expect(typeof or.validatables.age.message).toBe('string');
            expect(or.validatables.age.valid).toBe(false);

            expect(typeof or.validatables.address.message).toBe('string');
            expect(or.validatables.address.valid).toBe(false);
        });
    });
});


describe("implicit incomplete", function() {

    describe("all valid", function() {


        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
            info : new ValueCallback({
                age : Type('string'),
                hobby : Type('string'),
                no : Type('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
                (v)=>And(v),
                MessageMap)
        };

        let value = 'data';

        let property = new ValueCallback(validator,
            (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
            (v)=>And(<Record<PropertyKey, Validatable>>v),
            MessageMap
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(typeof validatable.validatables.name.message).toBe('string');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(typeof validatable.validatables.address.message).toBe('string');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(typeof validatable.validatables.user.message).toBe('string');

            } else {

                fail('validatable.validatables.user should exist');
            }

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe('data');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.age.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.no.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }

        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);
            property.validators.info.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(typeof validatable.validatables.name.message).toBe('string');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(typeof validatable.validatables.address.message).toBe('string');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(typeof validatable.validatables.user.message).toBe('string');

            } else {

                fail('validatable.validatables.user should exist');
            }

            if(validatable.validatables.info) {

                expect(validatable.validatables.info.valid).toBe(true);
                expect(validatable.validatables.info.value).toBe('data');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.age.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

                // @ts-expect-error
                expect(validatable.validatables.info.validatables.no.valid).toBe(true);
                // @ts-expect-error
                expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

            } else {

                fail('validatable.validatables.info should exist');
            }
        });
    });


    describe("mixed", function() {

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


    describe("all invalid", function() {

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

            let and = property.validate({});

            expect<boolean>(and.valid).toBe(false);
            expect(and.value).toEqual({});

            if(and.validatables.name) {

                expect(and.validatables.name.valid).toBe(false);
                expect(typeof and.validatables.name.message).toBe('string');
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                fail('validatable.validatables.age should not exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should not exist');
            }


            if(and.validatables.info) {

                fail('validatable.validatables.info should exist');
            }
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);
            property.validators.info.validation = (v)=>Or(<Record<PropertyKey, Validatable>>v);

            let or = property.validate({});

            expect(or.value).toEqual({});
            expect<boolean>(or.valid).toBe(false);

            if(or.validatables.name) {

                expect(typeof or.validatables.name.message).toBe('string');
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

            if(or.validatables.info) {

                fail('validatable.validatables.info should exist');
            }

        });
    });
});


