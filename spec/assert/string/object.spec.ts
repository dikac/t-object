import ObjectMessage from "../../../dist/assert/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(ObjectMessage(true, Infinity )).toBe('type is object.');
        expect(ObjectMessage(false, Infinity )).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectMessage(true, -Infinity)).toBe('type is object.');
        expect(ObjectMessage(false, -Infinity)).toBe('type must object, actual number.');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(ObjectMessage(true, 1 )).toBe('type is object.');
        expect(ObjectMessage(false, 1 )).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectMessage(true, -1)).toBe('type is object.');
        expect(ObjectMessage(false, -1)).toBe('type must object, actual number.');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(ObjectMessage(true, 1.1)).toBe('type is object.');
        expect(ObjectMessage(false, 1.1)).toBe('type must object, actual number.');
    });

    it(`float`, () => {
        expect(ObjectMessage(true, -1.1)).toBe('type is object.');
        expect(ObjectMessage(false, -1.1)).toBe('type must object, actual number.');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(ObjectMessage(true, NaN)).toBe('type is object.');
        expect(ObjectMessage(false, NaN)).toBe('type must object, actual number.');
    });

});
