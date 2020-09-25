import Or from "../../../dist/validatable/or";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


it("valid", function() {

    let record = {
        valid1 : {valid:true},
        valid2 : {valid:true},
    };

    let result = Or(record);

    expect(result.valid).toBe(true);

});



it("invalid", () => {

    let record = {
        invalid1 : {valid:false},
        invalid2 : {valid:false},
    };

    let result = Or(record);

    expect(result.valid).toBe(false);
});



it("mixed", () => {

    let record = {
        valid : {valid:true},
        invalid : {valid:false},
    };

    let result = Or(record);

    expect(result.valid).toBe(true);
});
