import Map from "../../../dist/validator/map-partial";
import And from "../../../dist/validatable/and";
import Or from "../../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type-standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

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

    let property = Map(validator,
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    it(`and validation`, () => {

        let and = property.validate(value);

        expect(and.valid).toBe(false);
        expect(and.value).not.toBe(value);

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
    });


    it(`or validation `, () => {

        property.validation = (v)=>Or(<globalThis.Record<PropertyKey, Validatable>>v);

        let or = property.validate(value);
        expect(or.value).not.toEqual(value);
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

    });
});


describe("recursive", function() {

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
        info : Map({
            age : Type('number'),
            hobby : Type('string'),
            no : Type('number'),
        },(v)=>And(v), MessageMap)
    };

    let value = {
        name : 'name',
        age : "15",
        address : 'address',
        info : {
            age : 5,
            hobby : 7,
            no : 6,
        }
    };

    let property = Map(validator,
        (v)=>And(v),
        MessageMap
    );

    it(`and validation`, () => {

        let and = property.validate(value);

        expect(and.valid).toBe(false);
        expect(and.value).not.toEqual(value);

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
            fail('validatable.validatables.info should not exist');
        }
    });


    it(`or validation `, () => {

        property.validation = (v)=>Or(v);
        property.validators.info.validation = (v)=>Or(v);

        let or = property.validate(value);
        expect(or.value).not.toEqual(value);
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

            fail('validatable.validatables.info should not exist');
        }
    });

});

