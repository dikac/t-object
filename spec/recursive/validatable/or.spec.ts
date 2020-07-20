import Valid from "../../../dist/validatable/recursive/valid";
import Or from "../../../dist/recursive/validatable/or";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


it("valids", function() {

    let record = {
        valid1 : {valid:true},
        valid2 : {valid:true},
    };

    let result = new Or(record);

    expect(result.valid).toBe(true);

});



it("invalids", () => {

    let record = {
        invalid1 : {valid:false},
        invalid2 : {valid:false},
    };

    let result = new Or(record);

    expect(result.valid).toBe(false);
});



it("mixed", () => {

    let record = {
        valid : {valid:true},
        invalid : {valid:false},
    };

    let result = new Or(record);

    expect(result.valid).toBe(true);
});
