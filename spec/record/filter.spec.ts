import Filter from "../../dist/record/filter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let record = {

    valid : true,
    invalid : false,
    valids : {
        valid1 : true,
        valid2 : true,
    },
    invalids : {
        invalid1 : false,
        invalid2 : false,
    },
    mixed : {
        valid : true,
        invalid : false,
    }
};

describe("invalid", function() {

    let result = Filter(record, (v:boolean)=>v,(v:any) : v is boolean => typeof v === "boolean");

    it("valid", () => {

        if(result.valid) {

            expect(result.valid).toBe(true);

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

                expect(result.valids.valid1).toBe(true);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result.valids && result.valids.valid2) {

                expect(result.valids.valid2).toBe(true);

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

                expect(result.mixed.valid).toBe(true);

            } else {

                fail('property is not exits')
            }

            expect(result.mixed.invalid).toBeUndefined();

        } else {

            fail('property is not exits')
        }
    });

});


describe("valid", function() {

    let result = Filter(record, (v:boolean)=>v, (v:any) : v is boolean => typeof v === "boolean");

    it("valid", () => {

        if(result.valid) {

            expect(result.valid).toBe(true);

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

                expect(result.valids.valid1).toBe(true);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result.valids && result.valids.valid2) {

                expect(result.valids.valid2).toBe(true);

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

                expect(result.mixed.valid).toBe(true);

            } else {

                fail('property is not exits')
            }

            expect(result.mixed.invalid).toBeUndefined();

        } else {

            fail('property is not exits')
        }
    });

});
