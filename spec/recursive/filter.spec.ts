import Filter from "../../dist/recursive/filter";
import {O} from "ts-toolbelt";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe("compiler compatibility", function() {

    let record = {
        boolean : true,
        string : 'false',
        array : [],
        object : {}
    };

    it("boolean", () => {

        let result = Filter(record,(v:any) : v is true => typeof v === "boolean");

        let boolean : boolean;
        boolean = result.boolean;

        // @ts-expect-error
        boolean = result.string;

        // @ts-expect-error
        boolean = result.array;

        // @ts-expect-error
        boolean = result.object;

    });

    it("boolean", () => {

        let result = Filter(record,(v:any) : v is object => typeof v === "object");

        let object : object;

        object = result.object;
        object = result.array;

        // @ts-expect-error
        object = result.string;

        // @ts-expect-error
        object = result.boolean;
    });

    it("boolean", () => {

        let result = Filter(record,(v:any) : v is Array<any> => Array.isArray(v));

        let array : any[];

        array = result.array;

        // @ts-expect-error
        array = result.object;

        // @ts-expect-error
        array = result.string;

        // @ts-expect-error
        array = result.boolean;
    });

});

describe("check value", function() {

    let record = {
        boolean : true,
        string : 'false',
        array : [],
        object : {}

    };

    it("boolean", () => {

        let result = Filter(record,(v:any) : v is boolean => typeof v === "boolean");

        expect(result.boolean).toBe(true);
        // @ts-expect-error
        expect(result.string).toBe(undefined);
        // @ts-expect-error
        expect(result.array).toBe(undefined);
        // @ts-expect-error
        expect(result.object).toBe(undefined);
    });

    it("object", () => {

        let result = Filter(record,(v:any) : v is object => typeof v === "object");

        // @ts-expect-error
        expect(result.boolean).toBe(undefined);
        // @ts-expect-error
        expect(result.string).toBe(undefined);

        expect(result.array).toBe(result.array);

        expect(result.object).toBe(result.object);
    });

    it("array", () => {

        let result = Filter(record,(v:any) : v is Array<any> => Array.isArray(v));

        expect(result.array).toBe(result.array);

        // @ts-expect-error
        expect(result.boolean).toBe(undefined);
        // @ts-expect-error
        expect(result.string).toBe(undefined);
        // @ts-expect-error
        expect(result.object).toBe(undefined);
    });

})
