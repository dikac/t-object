import Type from "../../dist/boolean/object";


describe("boolean", function() {

    it(`true`, () => {
        expect(Type(true)).toBeFalse();
    });

    it(`false`, () => {
        expect(Type(false)).toBeFalse();
    });

});

describe("string", function() {

    it(`primitive`, () => {
        expect(Type('str')).toBeFalse();
    });

    it(`object`, () => {
        expect(Type(new String('str'))).toBeTrue();
    });

});


describe("number", function() {

    it(`primitive`, () => {
        expect(Type(1)).toBeFalse();
    });

    it(`nan`, () => {
        expect(Type(NaN)).toBeFalse();
    });

});

describe("object", function() {

    it(`plain`, () => {
        expect(Type({})).toBeTrue();
    });

    it(`instance`, () => {
        expect(Type(new Map())).toBeTrue();
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        expect(Type(function () {})).toBeFalse();
    });

    it(`anonymous arrow`, () => {
        expect(Type(()=>{})).toBeFalse();
    });

    it(`named`, () => {
        expect(Type(isNaN)).toBeFalse();
    });

});

describe("empty", function() {

    it(`null `, () => {
        expect(Type(null)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(Type(undefined)).toBeFalse();
    });

});
