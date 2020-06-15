import Property from "../../../dist/record/infer/property";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('object', function () {

    let data = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    };

    it(`compiler compilable`, () => {

        let property : Property<typeof data>; // Compiler Pass
        property = 'data1'; // Compiler Pass
        property = 'data2'; // Compiler Pass
        property = 'data3'; // Compiler Pass
        property = 'data4'; // Compiler Pass
    });
});
