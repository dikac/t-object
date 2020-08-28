import Property from "../../../../dist/property/boolean/exists";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it(`method`, () => {

    expect(Property([], 'splice')).toBe(true)
});

it(`property`, () => {

    let object =  {
        test : 1
    }
    expect(Property(object, 'test')).toBe(true);
});

it(`getter`, () => {

    class Getter {
        get test () { return 1 }
    }
    expect(Property(new Getter(), 'test')).toBe(true);
});

it(`setter`, () => {

    class Setter {
        set test (value) {}
    }
    expect(Property(new Setter(), 'test')).toBe(true);
});

it(`implicit undefined`, () => {

    let test =  {
        test : undefined
    }
    expect(Property(test, 'test')).toBe(true);
});

it(`not exist`, () => {

    let test =  {
    }
    expect(Property(test, 'test')).toBe(false);
});


it(`symbol`, () => {

    expect(Property(new Map(), Symbol.iterator)).toBe(true);
});


