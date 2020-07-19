import Invalid from "../../../dist/validatable/recursive/invalid";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let record = {

    valid : {valid:true},
    invalid : {valid:false},
    valids : {
        valid1 : {valid:true},
        valid2 : {valid:true},
    },
    invalids : {
        invalid1 : {valid:false},
        invalid2 : {valid:false},
    },
    mixed : {
        valid : {valid:true},
        invalid : {valid:false},
    }
};

describe("check property", function() {

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

    describe("invalids", () => {

        it("valid1", () => {

            if(result.invalids && result.invalids.invalid1) {

                expect(result.invalids.invalid1.valid).toBe(false);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result.invalids && result.invalids.invalid2) {

                expect(result.invalids.invalid2.valid).toBe(false);

            } else {

                fail('property is not exits')
            }
        });
    });

    it("mixed", () => {

        if(result.mixed) {

            if(result.mixed.invalid) {

                expect(result.mixed.invalid.valid).toBe(false);

            } else {

                fail('property is not exits')
            }

            expect(result.mixed.valid).toBeUndefined();

        } else {

            fail('property is not exits')
        }
    });
});

