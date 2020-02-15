import Empty from "../../dist/boolean/empty";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('test', () => {

    it(`plain object`, () => expect(Empty({})).toBe(true));

    it(`empty class`, () => {

        class E {}
        expect(Empty(new E)).toBe(true);
    });

    it(`array`, () => {
        expect(Empty(new Array())).toBe(false);
    });

});
