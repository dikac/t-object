import Property from "../../dist/iterable/property";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('property', () => {

    let object = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    }

    it('check result', function () {

        expect([...Property(object)]).toEqual([
            'data1',
            'data2',
            'data3',
            'data4',
        ]);

    })
});


describe('function', () => {

    let object = {
        function1 : function() {},
        function2 : function() {},
        function3 : function() {},
        function4 : function() {},
    }


    it('check result', function () {

        expect([...Property(object)]).toEqual([
            'function1',
            'function2',
            'function3',
            'function4'
        ]);

    })
});
