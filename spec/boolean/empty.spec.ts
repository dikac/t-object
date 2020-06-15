import Empty from "../../dist/boolean/empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('valid', () => {

    it(`plain object`, () => {

        expect(Empty({})).toBe(true)
    });

    it(`empty class`, () => {

        class Emp {}
        expect(Empty(new Emp)).toBe(true);
    });

});

describe('invalid', () => {

    it(`empty class`, () => {

        class WithMethod {
            test () {}
        }
        expect(Empty(new WithMethod)).toBe(true);
    });

    it(`native instance`, () => {
        expect(Empty(new Array())).toBe(false);
    });


    it(`arrow function`, () => {
        expect(Empty(()=>undefined)).toBe(false);
    });


    it(`function`, () => {
        expect(Empty(function(){})).toBe(false);
    });

});
