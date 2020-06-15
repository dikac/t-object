import Filter from "../../dist/filter";


it("enable console log", () => { spyOn(console, 'log').and.callThrough()});



let data = {
    property1 : 'a',
    property2 : 'a',
    property3 : 'b',
    property4 : 'c',
};

describe('test', function () {

    let result = Filter(data,  (v:string)  => v==='a');

    it(`check value`, () => {

        expect(result.property1).toBe('a', 'property1');
        expect(result.property2).toBe('a', 'property2');
        expect(result.property3).toBeUndefined();
        expect(result.property4).toBeUndefined();
    });
});

