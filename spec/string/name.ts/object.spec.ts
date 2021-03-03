import Name from "../../../dist/string/name";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

class Test {

}

it(`true`, () => {
    expect(Name(new Test)).toBe('Test');
});
