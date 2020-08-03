import Object from "../../../dist/validatable/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Object({value:Infinity, valid:true})).toBe('value is object');
        expect(Object({value:Infinity, valid:false})).toBe('value is not object');
    });

    it(`number`, () => {
        expect(Object({value:-Infinity, valid:true})).toBe('value is object');
        expect(Object({value:-Infinity, valid:false})).toBe('value is not object');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Object({value:1, valid:true})).toBe('value is object');
        expect(Object({value:1, valid:false})).toBe('value is not object');
    });

    it(`number`, () => {
        expect(Object({value:-1, valid:true})).toBe('value is object');
        expect(Object({value:-1, valid:false})).toBe('value is not object');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Object({value:1.1, valid:true})).toBe('value is object');
        expect(Object({value:1.1, valid:false})).toBe('value is not object');
    });

    it(`float`, () => {
        expect(Object({value:-1.1, valid:true})).toBe('value is object');
        expect(Object({value:-1.1, valid:false})).toBe('value is not object');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Object({value:NaN, valid:true})).toBe('value is object');
        expect(Object({value:NaN, valid:false})).toBe('value is not object');
    });

});
