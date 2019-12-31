import Structure, {Validator} from "../../dist/boolean/structure";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('structure', () => {

    interface Test {
        number : number;
        string : string;
        object : object;
    }

    let validator : Validator<Test> = {
        number : (n) => typeof n === "number",
        string : (n) => typeof n === "string",
        object : (n) => typeof n === "object",
    };

    let object : Test = {
        number : 1,
        string : 'string',
        object : {},
    };

    it(`valid`, () => {

        expect(Structure<Test>(object, validator)).toBe(true);
    });

    it(`invalid`, () => {

        expect(Structure<Test>([], validator)).toBe(false);
    });

});