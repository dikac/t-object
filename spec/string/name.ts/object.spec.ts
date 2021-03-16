import Name from "../../../dist/string/name";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('custom', ()=>{

    class Test {

    }

    it(`true`, () => {
        expect(Name(new Test)).toBe('Test');
    });

})

describe('native Object', ()=>{

    it(`true`, () => {
        expect(Name({})).toBe('Object');
    });

})

