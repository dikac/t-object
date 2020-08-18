import StrictAssign from "../dist/strict-assign";
it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

interface Data {
    string ?: string;
    number ?: number;
    boolean ?: boolean;
}

describe('compiler compatible', function () {

    describe('partial', function () {

        let target : Data = {
            string : 'string'
        }

        let source  = {
            number : 1,
            boolean : false,
        }

        let result = StrictAssign(target, source);

        // @ts-expect-error
        let string : string = result.string;
        let number : number = result.number;
        let boolean : boolean = result.boolean;

    });

    describe('extra source', function () {

        let target : Data = {
            string : 'string'
        }

        let source = {
            number : 1,
            boolean : false,
            object : {}
        }

        let result = StrictAssign(target, source);

        // @ts-expect-error
        let string : string = result.string;
        let number : number = result.number;
        let boolean : boolean = result.boolean;
        let object : object = result.object;

    });
})

describe('test', function () {

    let target : Data = {
        string : 'string'
    }

    let source : Data = {
        number : 1,
        boolean : false,
    }


    it('check result', () => {

        let result = StrictAssign(target, source);
        expect(result.string).toBe('string');
        expect(result.number).toBe(1);
        expect(result.boolean).toBe(false);

    })
})
