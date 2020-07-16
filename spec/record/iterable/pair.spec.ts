import Pair from "../../../dist/record/iterable/pair";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe("single dimension", function() {

    let record = {
        valid: true,
        invalid: false,
    };


    let pair = new Pair(record, (v:any) : v is boolean => typeof v === "boolean");

    it("check value", () => {

        let data : [string[], boolean][]= [
            [['valid'],  true],
            [['invalid'],  false]
        ];

        for (let [property, value] of pair) {

            let current = <[string[], boolean]>data.shift();

            expect(current[0]).toEqual(property);
            expect(current[1]).toBe(value);
        }

    });
});



describe("multi dimension", function() {

    let record = {
        valid: true,
        invalid: false,
        child : {
            valid: true,
            invalid: false,
            recursive : {
                valid: true,
                invalid: false,
            }
        },
        recursive : {
            valid: true,
            invalid: false,
        }
    };


    let pair = new Pair(record, (v:any) : v is boolean => typeof v === "boolean");

    it("check value", () => {

        let data : [string[], boolean][]= [
            [['valid'],  true],
            [['invalid'],  false],
            [['child', 'valid'],  true],
            [['child', 'invalid'],  false],
            [['child', 'recursive', 'valid'],  true],
            [['child', 'recursive', 'invalid'],  false],
            [['recursive', 'valid'],  true],
            [['recursive', 'invalid'],  false],
        ];

        for (let [property, value] of pair) {

            let current = <[string[], boolean]>data.shift();

            expect(current[0]).toEqual(property);
            expect(current[1]).toBe(value);
        }

    });
})


describe("contain empty", function() {

    let record = {
        valid: true,
        invalid: false,
        child : {},
        recursive : {
            valid: true,
            invalid: false,
        }
    };


    let pair = new Pair(record, (v:any) : v is boolean => typeof v === "boolean");

    it("check value", () => {

        let data : [string[], boolean][]= [
            [['valid'],  true],
            [['invalid'],  false],
            [['recursive', 'valid'],  true],
            [['recursive', 'invalid'],  false],
        ];

        for (let [property, value] of pair) {

            let current = <[string[], boolean]>data.shift();

            expect(current[0]).toEqual(property);
            expect(current[1]).toBe(value);
        }

    });
})
