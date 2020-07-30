import And from "../../dist/validatable/and";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


it("all valid", function() {

    let record = {
        valid1 : {valid:true},
        valid2 : {valid:true},
    };

    let result = And(record);

    expect(result.valid).toBe(true);

});



it("valid", () => {

    let record = {
        invalid1 : {valid:false},
        invalid2 : {valid:false},
    };

    let result = And(record);

    expect(result.valid).toBe(false);
});



it("mixed", () => {

    let record = {
        valid : {valid:true},
        invalid : {valid:false},
    };

    let result = And(record);

    expect(result.valid).toBe(false);
});
