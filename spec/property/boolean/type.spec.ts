import Type from "../../../dist/property/boolean/type";


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
        expect(Type('str')).toBeTrue();
    });

    it(`object`, () => {
        expect(Type(new String('str'))).toBeFalse();
    });

});


describe("number", function() {

    it(`primitive`, () => {
        expect(Type(1)).toBeTrue();
    });

    it(`nan`, () => {
        expect(Type(NaN)).toBeTrue();
    });

});

describe("object", function() {

    it(`plain`, () => {
        expect(Type({})).toBeFalse();
    });

    it(`instance`, () => {
        expect(Type(new Map())).toBeFalse();
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


describe("symbol", function() {

    it(`iterator`, () => {

        expect(Type(Symbol.iterator)).toBeTrue();
    });

    it(`toStringTag`, () => {

        expect(Type(Symbol.toStringTag)).toBeTrue();
    });

    it(`custom`, () => {

        expect(Type(Symbol('custom'))).toBeTrue();
    });

});


