import Map from "../dist/map";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let data = {
    property1 : 1,
    property2 : 'string',
    property3 : true,
};

describe('implicit', function () {

    let result = Map<string, typeof data>(data,  (v:any) => 'data');

    it(`check value`, () => {

        expect(result.property1).toBe('data', 'property1');
        expect(result.property2).toBe('data', 'property2');
        expect(result.property3).toBe('data', 'property3');
    });
});

describe('explicit', function () {

    let result = Map(data,  (v:any) => 'data');

    it(`check value`, () => {
        expect(result.property1).toBe('data', 'property1');
        expect(result.property2).toBe('data', 'property2');
        expect(result.property3).toBe('data', 'property3');
    });
});

