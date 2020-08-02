import PartialUnion from "../dist/partial-union";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});


describe('compiler compatibility', () => {

    let test = {
        data1 : 'string',
        data2 : 'string',
        data3 : 'string',
    };

    describe('compiler compatibility', () => {

        let defaults : PartialUnion<typeof test> = {};
    });

    describe('compiler compatibility', () => {

        let defaults : PartialUnion<typeof test> = {
            data1: 'string'
        };
    });

});
