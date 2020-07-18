import ObjectMessage from "../../../dist/boolean/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(ObjectMessage(true, Infinity )).toBe('value "Infinity" is object');
        expect(ObjectMessage(false, Infinity )).toBe('value "Infinity" is not object');
    });

    it(`number`, () => {
        expect(ObjectMessage(true, -Infinity)).toBe('value "-Infinity" is object');
        expect(ObjectMessage(false, -Infinity)).toBe('value "-Infinity" is not object');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(ObjectMessage(true, 1 )).toBe('value "1" is object');
        expect(ObjectMessage(false, 1 )).toBe('value "1" is not object');
    });

    it(`number`, () => {
        expect(ObjectMessage(true, -1)).toBe('value "-1" is object');
        expect(ObjectMessage(false, -1)).toBe('value "-1" is not object');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(ObjectMessage(true, 1.1)).toBe('value "1.1" is object');
        expect(ObjectMessage(false, 1.1)).toBe('value "1.1" is not object');
    });

    it(`float`, () => {
        expect(ObjectMessage(true, -1.1)).toBe('value "-1.1" is object');
        expect(ObjectMessage(false, -1.1)).toBe('value "-1.1" is not object');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(ObjectMessage(true, NaN)).toBe('value "NaN" is object');
        expect(ObjectMessage(false, NaN)).toBe('value "NaN" is not object');
    });

});
