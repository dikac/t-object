import Message from "../../../dist/assert/string/not-empty";


it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('valid',() =>{

    it(`empty`, () => {
        expect(Message(true, {})).toBe(`Object is not empty object.`);
    });
    it(`not empty`, () => {
        expect(Message(true, {})).toBe(`Object is not empty object.`);
    });
});

describe('invalid',() =>{

    it(`empty`, () => {
        expect(Message(false, {})).toBe(`Object must not empty object.`);
    });

    it(`not empty`, () => {
            expect(Message(false, {})).toBe(`Object must not empty object.`);
    });
});
