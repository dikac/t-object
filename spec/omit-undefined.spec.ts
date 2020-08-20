import OmitUndefined from "../dist/omit-undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('compiler compatibility', () => {

    interface Test {

        required : string;
        nullable : string|null;
        optional ?: string;
        optionalUnion : undefined|string;
    }

    describe('explicit', () => {

        let data : Test = {
            required : 'required',
            nullable : 'nullable',
            optionalUnion : undefined,
        }

        let result = OmitUndefined(data);


        data.required = result.required;
        data.nullable = result.nullable;

        // @ts-expect-error
        data.optional = result.optional;

        // @ts-expect-error
        data.optionalUnion = result.optionalUnion;

    });

    describe('implicit', () => {

        let data = {
            required : 'required',
            nullable : 'nullable',
            optionalUnion : undefined,
        }

        let result = OmitUndefined(data);


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

        let result = OmitUndefined(data);

        expect(result.required).toBe('required');
        expect(result.nullable).toBe('nullable');
        expect(result.null).toBe(null);
        expect('undefined' in result).toBeFalse();

    });

});
