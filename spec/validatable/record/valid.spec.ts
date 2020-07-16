import Valid from "../../../dist/validatable/record/valid";


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

            if(result.valids && result.valids.valid1) {

                expect(result.valids.valid1.valid).toBe(true);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result.valids && result.valids.valid2) {

                expect(result.valids.valid2.valid).toBe(true);

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

                expect(result.mixed.valid.valid).toBe(true);

            } else {

                fail('property is not exits')
            }

            expect(result.mixed.invalid).toBeUndefined();

        } else {

            fail('property is not exits')
        }
    });

});

