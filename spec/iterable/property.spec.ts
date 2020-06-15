import Value from "../../dist/iterable/value";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('property', () => {

    let object = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    }

    it('check result', function () {

        expect([...Value(object)]).toEqual([1,2,3,4]);

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

        expect([...Value(object)]).toEqual([
            object.function1,
            object.function2,
            object.function3,
            object.function4
        ]);

    })
});
