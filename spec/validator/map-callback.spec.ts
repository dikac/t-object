import MapCallback from "../../dist/validator/map-callback";
import ValidateValue from "../../dist/validator/return/record/standard";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";
import MessageMap from "../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/parameter/instance/instance";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
    };

    type TypeValidator = {
        name : ValidatorInterface<any, string, Instance<any, string>>,
        address :ValidatorInterface<any, string, Instance<any, string>>,
    };

    type Type = {
        name : string,
        address : string,
    }

    let value = {
        name : 'name',
        address : 'address',
    };

    describe("implicit complete", function() {

        let property = MapCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            And,
            MessageMap
        );

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;

        let string : Type = validatable.value;

    });

    describe("explicit complete", function() {

        describe("auto", function() {

            let property = MapCallback<globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>>(validator,
                (value, validators) => ValidateValue(value, validators, false),
                (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });

        describe("direct", function() {

            let property = MapCallback<TypeValidator>(validator,
                (value, validators) => ValidateValue(value, validators, false),
                (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let record : Type = validatable.value;

        });
    });

    describe("implicit partial", function() {

        let property = MapCallback(validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;
        let val : Type = validatable.value;

    });

    describe("explicit complete", function() {

        describe("auto", function() {

            let property = MapCallback<globalThis.Record<keyof typeof validator, ValidatorInterface<any, string, Instance<any, string>>>>(
                validator,
                (value, validators) =>
                    <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
                (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
                MessageMap
            );

            let validatable = property.validate(value);

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = MapCallback<TypeValidator>(
                validator,
                (value, validators) =>
                    <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
                (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
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

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
        };

        type TypeValidator = {
            name : ValidatorInterface<string, string, Instance<string, string>>,
            user :ValidatorInterface<string, string, Instance<string, string>>,
            address :ValidatorInterface<string, string, Instance<string, string>>,
        };

        type Type = {
            user : string,
            address : string,
            name : string,
        }

        let value = {
            user : 'user',
            name : 'name',
            address : 'address',
        };

        let property = MapCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

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

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let value = {
            age : "11",
            name : 'name',
            address : 'address',
        };

        let property = MapCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toBe(value);

            expect(and.validatables.name.valid).toBe(true);
            expect(and.validatables.name.message).toBe('value is type of "string"');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('value is not type of "number"');

            expect(and.validatables.address.valid).toBe(true);
            expect(and.validatables.address.message).toBe('value is type of "string"');

        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate(value);

            expect(or.valid).toBe(true);
            expect(or.value).toBe(value);

            expect(or.validatables.name.message).toBe('value is type of "string"');
            expect(or.validatables.name.valid).toBe(true);

            expect(or.validatables.age.message).toBe('value is not type of "number"');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('value is type of "string"');
            expect(or.validatables.address.valid).toBe(true);

        });
    });


    describe("all invalid", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let value = {
            name : {},
            age : {},
            address : {},
        };

        let property = MapCallback(validator,
            (value, validators) => ValidateValue(value, validators, false),
            (v)=>And(v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            expect(and.validatables.name.valid).toBe(false);
            expect(and.validatables.name.message).toBe('value is not type of "string"');

            expect(and.validatables.age.valid).toBe(false);
            expect(and.validatables.age.message).toBe('value is not type of "number"');

            expect(and.validatables.address.valid).toBe(false);
            expect(and.validatables.address.message).toBe('value is not type of "string"');
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(v);

            let or = property.validate(value);
            expect(or.valid).toBe(false);
            expect(or.value).toEqual(value);

            expect(or.validatables.name.message).toBe('value is not type of "string"');
            expect(or.validatables.name.valid).toBe(false);

            expect(or.validatables.age.message).toBe('value is not type of "number"');
            expect(or.validatables.age.valid).toBe(false);

            expect(or.validatables.address.message).toBe('value is not type of "string"');
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
        };

        let value = {
            name : 'name',
            address : 'age',
            user : 'address',
        };

        let property = MapCallback(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.user should exist');
            }

        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.user should exist');
            }
        });
    });


    describe("mixed", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let value = {
            name : 'name',
            age : "15",
            address : 'address',
        };

        let property = MapCallback(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toBe(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(and.validatables.name.message).toBe('value is type of "string"');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(and.validatables.age.message).toBe('value is not type of "number"');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);

            let or = property.validate(value);
            expect(or.value).toBe(value);
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('value is type of "string"');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(or.validatables.age.message).toBe('value is not type of "number"');
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
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
        };

        let value = {
            name : {},
            age : {},
            address : {},
        };

        let property = MapCallback(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v), MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(false);
                expect(and.validatables.name.message).toBe('value is not type of "string"');
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

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);

            let or = property.validate(value);

            expect(or.value).toEqual(value);
            expect(or.valid).toBe(false);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('value is not type of "string"');
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



describe("recursive", function() {

    describe("all valid", function() {

        let validator = {
            name : Type('string'),
            address : Type('string'),
            user : Type('string'),
            info : MapCallback({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number')
                },
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
                (v)=>And(v), MessageMap)
        };

        let value = {
            name : 'name',
            address : 'age',
            user : 'address',
            info : {
                age : 5,
                hobby : 'string',
                no : 6,
            }
        };

        let property = MapCallback(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );


        it(`and validation`, () => {

            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.user should exist');
            }

            expect(validatable.validatables.info.valid).toBe(true);
            expect(validatable.validatables.info.value).toBe(value.info);

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            // @ts-expect-error
            expect(validatable.validatables.info.validatables.age.message).toBe('value is type of "number"');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            // @ts-expect-error
            expect(validatable.validatables.info.validatables.hobby.message).toBe('value is type of "string"');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            // @ts-expect-error
            expect(validatable.validatables.info.validatables.no.message).toBe('value is type of "number"');

        });


        it(`or validation`, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);
            property.validators.info.validation = (v)=>Or(v);
            let validatable = property.validate(value);

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);


            if(validatable.validatables.name) {

                expect(validatable.validatables.name.valid).toBe(true);
                expect(validatable.validatables.name.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables.address) {

                expect(validatable.validatables.address.valid).toBe(true);
                expect(validatable.validatables.address.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables.user) {

                expect(validatable.validatables.user.valid).toBe(true);
                expect(validatable.validatables.user.message).toBe('value is type of "string"');

            } else {

                fail('validatable.validatables.user should exist');
            }

            expect(validatable.validatables.info.valid).toBe(true);
            expect(validatable.validatables.info.value).toBe(value.info);

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.age.valid).toBe(true);
            // @ts-expect-error
            expect(validatable.validatables.info.validatables.age.message).toBe('value is type of "number"');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
            // @ts-expect-error
            expect(validatable.validatables.info.validatables.hobby.message).toBe('value is type of "string"');

            // @ts-expect-error
            expect(validatable.validatables.info.validatables.no.valid).toBe(true);
            // @ts-expect-error
            expect(validatable.validatables.info.validatables.no.message).toBe('value is type of "number"');
        });
    });


    describe("mixed", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : MapCallback({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number')
                },
                (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
                (v)=>And(v), MessageMap)
        };

        let value = {
            name : 'name',
            age : "15",
            address : 'address',
            info : {
                age : 5,
                hobby : 'string',
                no : 6,
            }
        };

        let property = MapCallback(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toBe(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(true);
                expect(and.validatables.name.message).toBe('value is type of "string"');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                expect(and.validatables.age.valid).toBe(false);
                expect(and.validatables.age.message).toBe('value is not type of "number"');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should exist');
            }

            expect(and.validatables.info).toBe(<any>undefined);
        });


        it(`or validation `, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);
            property.validators.info.validation = (v)=>Or(v);

            let or = property.validate(value);
            expect(or.value).toBe(value);
            expect(or.valid).toBe(true);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('value is type of "string"');
                expect(or.validatables.name.valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables.age) {
                expect(or.validatables.age.message).toBe('value is not type of "number"');
                expect(or.validatables.age.valid).toBe(false);
            } else {
                fail('validatable.validatables.age should exist');
            }

            if(or.validatables.address) {
                fail('validatable.validatables.address should exist');
            }

            expect(or.validatables.info).toBe(<any>undefined);

        });
    });


    describe("all invalid", function() {

        let validator = {
            name : Type('string'),
            age : Type('number'),
            address : Type('string'),
            info : MapCallback({
                    age : Type('number'),
                    hobby : Type('string'),
                    no : Type('number')
                },
                (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
                (v)=>And(v), MessageMap)
        };

        let value = {
            name : {},
            age : {},
            address : {},
            info : {
                age : {},
                hobby : {},
                no : {},
            }
        };

        let property = MapCallback(validator,
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValue(value, validators, true),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v), MessageMap
        );

        it(`and validation`, () => {

            let and = property.validate(value);

            expect(and.valid).toBe(false);
            expect(and.value).toEqual(value);

            if(and.validatables.name) {
                expect(and.validatables.name.valid).toBe(false);
                expect(and.validatables.name.message).toBe('value is not type of "string"');
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables.age) {
                fail('validatable.validatables.age should not exist');
            }

            if(and.validatables.address) {
                fail('validatable.validatables.address should not exist');
            }


            expect(and.validatables.info).toBe(<any>undefined);
        });

        it(`or validation `, () => {

            property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);
            property.validators.info.validation = (v)=>Or(v);

            let or = property.validate(value);

            expect(or.value).toEqual(value);
            expect(or.valid).toBe(false);

            if(or.validatables.name) {
                expect(or.validatables.name.message).toBe('value is not type of "string"');
                expect(or.validatables.name.valid).toBe(false);
            } else {
                fail('validatable.validatables.name should exist');
            }

            expect(or.validatables.age).toBe(<any>undefined);
            expect(or.validatables.address).toBe(<any>undefined);
            expect(or.validatables.info).toBe(<any>undefined);

        });
    });
});

