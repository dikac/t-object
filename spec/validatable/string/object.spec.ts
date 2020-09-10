import Object from "../../../dist/validatable/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Object({value:Infinity, valid:true})).toBe('type is object.');
        expect(Object({value:Infinity, valid:false})).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(Object({value:-Infinity, valid:true})).toBe('type is object.');
        expect(Object({value:-Infinity, valid:false})).toBe('type must object, actual number.');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Object({value:1, valid:true})).toBe('type is object.');
        expect(Object({value:1, valid:false})).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(Object({value:-1, valid:true})).toBe('type is object.');
        expect(Object({value:-1, valid:false})).toBe('type must object, actual number.');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Object({value:1.1, valid:true})).toBe('type is object.');
        expect(Object({value:1.1, valid:false})).toBe('type must object, actual number.');
    });

    it(`float`, () => {
        expect(Object({value:-1.1, valid:true})).toBe('type is object.');
        expect(Object({value:-1.1, valid:false})).toBe('type must object, actual number.');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Object({value:NaN, valid:true})).toBe('type is object.');
        expect(Object({value:NaN, valid:false})).toBe('type must object, actual number.');
    });

});
