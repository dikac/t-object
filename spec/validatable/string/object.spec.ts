import Object_ from "../../../dist/validatable/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Object_({valid:true})).toBe('is object');
        expect(Object_({valid:false})).toBe('is not object');
    });

    it(`number`, () => {
        expect(Object_({valid:true})).toBe('is object');
        expect(Object_({valid:false})).toBe('is not object');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Object_({valid:true})).toBe('is object');
        expect(Object_({valid:false})).toBe('is not object');
    });

    it(`number`, () => {
        expect(Object_({valid:true})).toBe('is object');
        expect(Object_({valid:false})).toBe('is not object');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Object_({valid:true})).toBe('is object');
        expect(Object_({valid:false})).toBe('is not object');
    });

    it(`float`, () => {
        expect(Object_({valid:true})).toBe('is object');
        expect(Object_({valid:false})).toBe('is not object');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Object_({valid:true})).toBe('is object');
        expect(Object_({valid:false})).toBe('is not object');
    });

});
