import Object from "../../../dist/validatable/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Object({value:Infinity, valid:true})).toBe('value "Infinity" is object');
        expect(Object({value:Infinity, valid:false})).toBe('value "Infinity" is not object');
    });

    it(`number`, () => {
        expect(Object({value:-Infinity, valid:true})).toBe('value "-Infinity" is object');
        expect(Object({value:-Infinity, valid:false})).toBe('value "-Infinity" is not object');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Object({value:1, valid:true})).toBe('value "1" is object');
        expect(Object({value:1, valid:false})).toBe('value "1" is not object');
    });

    it(`number`, () => {
        expect(Object({value:-1, valid:true})).toBe('value "-1" is object');
        expect(Object({value:-1, valid:false})).toBe('value "-1" is not object');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Object({value:1.1, valid:true})).toBe('value "1.1" is object');
        expect(Object({value:1.1, valid:false})).toBe('value "1.1" is not object');
    });

    it(`float`, () => {
        expect(Object({value:-1.1, valid:true})).toBe('value "-1.1" is object');
        expect(Object({value:-1.1, valid:false})).toBe('value "-1.1" is not object');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Object({value:NaN, valid:true})).toBe('value "NaN" is object');
        expect(Object({value:NaN, valid:false})).toBe('value "NaN" is not object');
    });

});
