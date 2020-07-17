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
        property = 'data1';
        property = 'data2';
        property = 'data3';
        property = 'data4';

        // @ts-expect-error
        property = 'data5';
    });
});
