import Filter from "../../../dist/record/recursive/filter";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe("single dimension", function() {

    let record = {
        valid : true,
        invalid : false,
    };

    it("true", () => {

        let result = Filter(record, (v:any) : boolean => v === true);

        expect(result.valid).toBe(true);
        expect(result.invalid).toBe(undefined);

    });

    it("false", () => {

        let result = Filter(record, (v:any) : boolean => v === false);

        expect(result.invalid).toBe(false);
        expect(result.valid).toBe(undefined);
    });

    it("boolean", () => {

        let result = Filter(record, (v:any) : boolean => typeof v === "boolean");
        expect(result.invalid).toBe(false);
        expect(result.valid).toBe(true);
    });
})


describe("multi dimension", function() {

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

    it("true", () => {

        let result = Filter(record, (v:any) : boolean => v === true);

        expect(result.valid).toBe(true);
        expect(result.invalid).toBe(undefined);

        expect(result.valids).toBeDefined();

        if(result.valids) {
            expect(result.valids.valid1).toBe(true);
            expect(result.valids.valid2).toBe(true);
        }


        expect(result.invalids).toBe(undefined);

        expect(result.mixed).toBeDefined();

        if(result.mixed) {
            expect(result.mixed.valid).toBe(true);
            expect(result.mixed.invalid).toBe(undefined);
        }
    });

    it("false", () => {

        let result = Filter(record, (v:any) : boolean => v === false);

        expect(result.invalid).toBe(false);
        expect(result.valid).toBe(undefined);

        expect(result.invalids).toBeDefined();

        if(result.invalids) {
            expect(result.invalids.invalid1).toBe(false);
            expect(result.invalids.invalid2).toBe(false);
        }

        expect(result.valids).toBe(undefined);

        expect(result.mixed).toBeDefined();

        if(result.mixed) {
            expect(result.mixed.valid).toBe(undefined);
            expect(result.mixed.invalid).toBe(false);
        }
    });

    it("boolean", () => {

        let result = Filter(record, (v:any) : boolean => typeof v === "boolean");

        expect(result.invalid).toBe(false);
        expect(result.valid).toBe(true);

        expect(result.invalids).toBeDefined();
        if(result.invalids) {
            expect(result.invalids.invalid1).toBe(false);
            expect(result.invalids.invalid2).toBe(false);
        }

        expect(result.valids).toBeDefined();
        if(result.valids) {
            expect(result.valids.valid1).toBe(true);
            expect(result.valids.valid2).toBe(true);
        }

        expect(result.mixed).toBeDefined();
        if(result.mixed) {
            expect(result.mixed.valid).toBe(true);
            expect(result.mixed.invalid).toBe(false);
        }
    });
})
