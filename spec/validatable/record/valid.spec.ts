import Valid from "../../../dist/validatable/record/valid";
import And from "../../../dist/validatable/and";
import Or from "../../../dist/validatable/or";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});



describe("flat", function() {

    let record = {

        valid : {valid:true},
        invalid : {valid:false},
    };


    let result = Valid(record);

    it("valid", () => {

        if(result.valid) {

            expect(result.valid.valid).toBe(true);

        } else {

            fail('property is not exits')
        }
    });

    it("invalid", () => {

        expect(result.invalid).toBeUndefined();
    });

});


describe("recursive", function() {

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
        mixed : Or({
            valid : {valid:true},
            invalid : {valid:false},
        })
    };


    let result = Valid(record);

    it("valid", () => {

        if(result.valid) {

            expect(result.valid.valid).toBe(true);

        } else {

            fail('property is not exits')
        }
    });

    it("invalid", () => {

        expect(result.invalid).toBeUndefined();
    });

    describe("valids", () => {

        it("valid1", () => {

            if(result.valids && result.valids.validatables.valid1) {

                expect(result.valids.validatables.valid1.valid).toBe(true);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result.valids && result.valids.validatables.valid2) {

                expect(result.valids.validatables.valid2.valid).toBe(true);

            } else {

                fail('property is not exits')
            }
        });
    });

    it("invalids", () => {

        expect(result.invalids).toBeUndefined();
    });


    it("mixed", () => {

        if(result.mixed) {

            if(result.mixed.valid) {

                expect(result.mixed.validatables.valid.valid).toBe(true);
                expect(result.mixed.validatables.invalid.valid).toBe(false);

            } else {

                fail('property is not exits')
            }

        } else {

            fail('property is not exits')
        }
    });

});

