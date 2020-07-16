import Or from "../../../../dist/validatable/record/boolean/or";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it('all true', function () {

    let record = {
        data1 :  {valid:true},
        data2 :  {
            data1:{valid:true},
            data2:{valid:true},
        },
    };

    expect(Or(record)).toBeTrue();
});

it('all false', function () {

    let record = {
        data1 :  {valid:false},
        data2 :  {
            data1:{valid:false},
            data2:{valid:false},
        },
    };

    expect(Or(record)).toBeFalse();
});


it('mixed', function () {

    let record = {
        data1 :  {valid:false},
        data2 :  {
            data1:{valid:true},
            data2:{valid:false},
        },
    };

    expect(Or(record)).toBeTrue();
});

