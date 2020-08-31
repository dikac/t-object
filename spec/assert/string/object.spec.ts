import ObjectMessage from "../../../dist/assert/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('true',() =>{

    it(`subject`, () => {
        expect(ObjectMessage(true, 'value')).toBe('value is object');
        expect(ObjectMessage(false, 'value')).toBe('value is not object');
    });

    it(`no subject`, () => {
        expect(ObjectMessage(true)).toBe('is object');
        expect(ObjectMessage(false)).toBe('is not object');
    });
});

describe('false',() =>{

    it(`subject`, () => {
        expect(ObjectMessage(true, 'value' )).toBe('value is object');
        expect(ObjectMessage(false, 'value' )).toBe('value is not object');
    });

    it(`no subject`, () => {
        expect(ObjectMessage(true)).toBe('is object');
        expect(ObjectMessage(false)).toBe('is not object');
    });
});
