import EmptyMessage from "../../../dist/boolean/string/empty";
import Name from "../../../dist/string/name";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('empty',() =>{

    it(`plain empty object`, () => {
        expect(EmptyMessage(true, {} )).toBe(`value "${Name({})}" is empty object`);
    });
});

describe('not empty',() =>{

    it(`plain empty object`, () => {
        expect(EmptyMessage(true, {} )).toBe(`value "${Name({})}" is empty object`);
    });
});
