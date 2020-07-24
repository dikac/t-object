import Invalid from "../../../dist/validatable/record/invalid";
import And from "../../../dist/record/validatable/and";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let record = {
        valid : {valid:true},
        invalid : {valid:false}
    };

    let result = Invalid(record);

    it("invalid", () => {

        if(result.invalid) {

            expect(result.invalid.valid).toBe(false);

        } else {

            fail('property is not exits')
        }
    });

    it("valid", () => {

        expect(result.valid).toBeUndefined();
    });
});




describe("check property", function() {

    let record = {

        valid : {valid:true},
        invalid : {valid:false},
        valids : And({
            valid1 : {valid:true},
            valid2 : {valid:true},
        }),
        invalids : And({
            invalid1 : {valid:false},
            invalid2 : {valid:false},
        }),
        mixed : And({
            valid : {valid:true},
            invalid : {valid:false},
        })
    };



    let result = Invalid(record);

    it("invalid", () => {

        if(result.invalid) {

            expect(result.invalid.valid).toBe(false);

        } else {

            fail('property should exits')
        }
    });

    it("valid", () => {

        expect(result.valid).toBeUndefined();
    });

    describe("invalids", () => {

        it("valid1", () => {

            if(result.invalids && result.invalids.validatables.invalid1) {

                expect(result.invalids.validatables.invalid1.valid).toBe(false);

            } else {

                fail('property should exits')
            }
        });

        it("valid2", () => {

            if(result.invalids && result.invalids.validatables.invalid2) {

                expect(result.invalids.validatables.invalid2.valid).toBe(false);

            } else {

                fail('property should exits')
            }
        });
    });

    it("mixed", () => {

        if(result.mixed) {

            if(result.mixed.validatables.invalid) {

                expect(result.mixed.validatables.invalid.valid).toBe(false);
                expect(result.mixed.validatables.valid.valid).toBe(true);

            } else {

                fail('property is not exits')
            }

        } else {

            fail('property should exits')
        }
    });
});

