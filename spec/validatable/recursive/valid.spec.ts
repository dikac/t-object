import Valid from "../../../dist/validatable/recursive/valid";
import And from "../../../dist/recursive/validatable/and";
import Or from "../../../dist/recursive/validatable/or";


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
        valids : new And({
            valid1 : {valid:true},
            valid2 : {valid:true},
        }),
        invalids : new And({
            invalid1 : {valid:false},
            invalid2 : {valid:false},
        }),
        mixed : new Or({
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

            if(result.valids && result.valids.validatable.valid1) {

                expect(result.valids.validatable.valid1.valid).toBe(true);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result.valids && result.valids.validatable.valid2) {

                expect(result.valids.validatable.valid2.valid).toBe(true);

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

                expect(result.mixed.validatable.valid.valid).toBe(true);
                expect(result.mixed.validatable.invalid.valid).toBe(false);

            } else {

                fail('property is not exits')
            }

        } else {

            fail('property is not exits')
        }
    });

});

