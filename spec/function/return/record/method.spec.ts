import MethodSingle from "../../../../dist/function/return/record/method";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


class Test {

    string (value : string) {

        return value + value;
    }

    number (value : number) {

        return value + value;
    }

    boolean (value : boolean) {

        return !value;
    }
}


describe('compiler compatibility', () => {

    describe('partial 1', () => {

        let result = MethodSingle(new Test(), {
            string : ['data']
        });

        let string : string = result.string;

        // @ts-expect-error
        let boolean : boolean = result.boolean;

        // @ts-expect-error
        let number : number = result.number;
    });

    describe('partial 2', () => {

        let result = MethodSingle(new Test(), {
            string : ['data'],
            number : [5]
        });

        let string : string = result.string;

        // @ts-expect-error
        let boolean : boolean = result.boolean;

        let number : number = result.number;
    });

    describe('all', () => {

        let result = MethodSingle(new Test(), {
            string : ['data'],
            number : [5],
            boolean : [false]
        });

        let string : string = result.string;

        let boolean : boolean = result.boolean;

        let number : number = result.number;
    });

    it('not-exist', () => {

        try {

            // @ts-expect-error
            let result = MethodSingle(new Test(), {
                number : [5],
                object : [{}]
            });

        } catch (error) {

            expect(error).toBeInstanceOf(Error);
        }

    });
});


describe('test', () => {

    it('partial 1', () => {

        let result = MethodSingle(new Test(), {
            string : ['data']
        });

        expect(result.string).toBe('data' + 'data');

        // @ts-expect-error
        expect(result.boolean).toBe(undefined);

        // @ts-expect-error
        expect(result.number).toBe(undefined);
    });

    it('partial 2', () => {

        let result = MethodSingle(new Test(), {
            string : ['data'],
            number : [5]
        });

        expect(result.string).toBe('data' + 'data');

        // @ts-expect-error
        expect(result.boolean).toBe(undefined);

        expect(result.number).toBe(10);
    });

    it('all', () => {

        let result = MethodSingle(new Test(), {
            string : ['data'],
            number : [5],
            boolean : [false]
        });

        expect(result.string).toBe('data' + 'data');

        expect(result.boolean).toBe(true);

        expect(result.number).toBe(10);
    });

    it('not-exist', () => {

        try {

            // @ts-expect-error
            let result = MethodSingle(new Test(), {
                number : [5],
                object : [{}]
            });

            result.object

        } catch (error) {

            expect(error).toBeInstanceOf(Error);
        }

    });
});
