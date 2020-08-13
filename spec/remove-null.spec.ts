import RemoveNull from "../dist/remove-null";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('compiler compatibility', () => {

    interface Test {

        required : string;
        undefinable : string|undefined;
        optional ?: string;
        optionalUnion : null|string;
    }

    describe('explicit', () => {

        let data : Test = {
            required : 'required',
            undefinable : 'nullable',
            optionalUnion : null,
        }

        let result = RemoveNull(data);


        data.required = result.required;
        data.undefinable = result.undefinable;

        data.optional = result.optional;

        // @ts-expect-error
        data.optionalUnion = result.optionalUnion;

    });

    describe('implicit', () => {

        let data = {
            required : 'required',
            nullable : 'nullable',
            optionalUnion : null,
        }

        let result = RemoveNull(data);


        data.required = result.required;
        data.nullable = result.nullable;

        // @ts-expect-error
        data.optional = result.optional;

        // @ts-expect-error
        data.optionalUnion = result.optionalUnion;

    });
});


describe('data', () => {

    it('explicit', () => {

        let data = {
            required : 'required',
            nullable : 'nullable',
            undefined : undefined,
            null : null,
        }

        let result = RemoveNull(data);

        expect(result.required).toBe('required');
        expect(result.nullable).toBe('nullable');
        expect(result.undefined).toBe(undefined);
        expect('null' in result).toBeFalse();

    });

});
