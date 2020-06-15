import Structure, {Validation} from "../../dist/boolean/structure";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('same', () => {

    interface Test {
        number : number;
        string : string;
        object : object;
    }

    let validator : Validation<Test> = {
        number : (n) => typeof n === "number",
        string : (n) => typeof n === "string",
        object : (n) => typeof n === "object",
    };

    let object : Test = {
        number : 1,
        string : 'string',
        object : {},
    };

    it(`check result`, () => {

        expect(Structure<Test>(object, validator)).toBe(true);
    });

});

describe('missing validation', () => {

    interface Test {
        number : number;
        string : string;
        object : object;
        boolean : boolean;
    }

    let validator : Validation<Partial<Test>> = {
        number : (n) => typeof n === "number",
        string : (n) => typeof n === "string",
        object : (n) => typeof n === "object",
    };

    let object : Test = {
        number : 1,
        string : 'string',
        object : {},
        boolean : true,
    };

    it(`check result`, () => {

        expect(Structure<Partial<Test>>(object, validator)).toBe(true);
    });
});


describe('missing property', () => {

    interface Test {
        number : number;
        string : string;
        object : object;
    }

    let validator : Validation<Partial<Test>> = {
        number : (n) => typeof n === "number",
        string : (n) => typeof n === "string",
        object : (n) => typeof n === "object",
    };

    let object : Partial<Test> = {
        number : 1,
        string : 'string',
    };

    it(`check result`, () => {

        expect(Structure<Partial<Test>>(object, validator)).toBe(false);
    });
});
