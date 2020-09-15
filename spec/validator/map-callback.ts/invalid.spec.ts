import MapCallback from "../../../dist/validator/map-callback";
import ValidateMapPartial from "../../../dist/validator/validatable/record/map-partial";
import ValidateMap from "../../../dist/validator/validatable/record/map";
import And from "../../../dist/validatable/and";
import Or from "../../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/validatable/validatable";
import MapCallbackFunction from "../../../dist/validator/map-callback-function";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {


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

    let property = new MapCallback(validator, ValidateMap, And, MessageMap);

    it(`and validation`, () => {

        let and = property.validate(value);

        expect(and.valid).toBe(false);
        expect(and.value).toEqual(value);

        expect(and.validatables.name.valid).toBe(false);
        expect(typeof and.validatables.name.message).toBe('string');

        expect(and.validatables.age.valid).toBe(false);
        expect(typeof and.validatables.age.message).toBe('string');

        expect(and.validatables.address.valid).toBe(false);
        expect(typeof and.validatables.address.message).toBe('string');
    });

    it(`or validation `, () => {

        property.validation = (v)=>Or(v);

        let or = property.validate(value);
        expect(or.valid).toBe(false);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables.name.message).toBe('string');
        expect(or.validatables.name.valid).toBe(false);

        expect(typeof or.validatables.age.message).toBe('string');
        expect(or.validatables.age.valid).toBe(false);

        expect(typeof or.validatables.address.message).toBe('string');
        expect(or.validatables.address.valid).toBe(false);
    });
});


describe("recursive", function() {

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
        info : MapCallbackFunction({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number')
            },
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial(value, validators),
            And, MessageMap)
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

    let property = new MapCallback(validator,
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v), MessageMap
    );

    it(`and validation`, () => {

        let and = property.validate(value);

        expect(and.valid).toBe(false);
        expect(and.value).toEqual(value);

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


        expect(and.validatables.info).toBe(<any>undefined);
    });

    it(`or validation `, () => {

        property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);
        property.validators.info.validation = (v)=>Or(v);

        let or = property.validate(value);

        expect(or.value).toEqual(value);
        expect(or.valid).toBe(false);

        if(or.validatables.name) {
            expect(typeof or.validatables.name.message).toBe('string');
            expect(or.validatables.name.valid).toBe(false);
        } else {
            fail('validatable.validatables.name should exist');
        }

        expect(or.validatables.age).toBe(<any>undefined);
        expect(or.validatables.address).toBe(<any>undefined);
        expect(or.validatables.info).toBe(<any>undefined);

    });

});

