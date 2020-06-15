import Plain from "../../dist/boolean/plain";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('test', () => {

    it(`plain object`, () => expect(Plain({})).toBe(true));

    it(`empty class`, () => {

        class E {}
        expect(Plain(new E)).toBe(false);
    });

    it(`array`, () => {
        expect(Plain(new Array())).toBe(false);
    });

});
