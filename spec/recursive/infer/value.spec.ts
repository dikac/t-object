import Value from "../../../dist/recursive/value/value";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('object', function () {

    let data = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    };

    it(`compiler compilable`, () => {

        let property : Value<typeof data>; // Compiler Pass
        property = 1; // Compiler Pass
        property = 2; // Compiler Pass
        property = 3; // Compiler Pass
        property = 4; // Compiler Pass
    });
});
