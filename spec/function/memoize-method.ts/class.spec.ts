import MemoizeMethod from "../../../dist/function/memoize-method";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('no argument', ()=>{


    let called = 0;
    let result : string;

    class Test {

        get random() : string {
            return Math.random().toString();
        }

        @MemoizeMethod()
        data () : string {

            called++;
            return this.random;
        }
    }

    let object = new Test();

    it('check initial', ()=>{

        expect(called).toBe(0);

    });

    it('check value', ()=>{

        result = object.data();
        expect(typeof result).toBe('string');
        expect(called).toBe(1);

    });

    it('re-check value', ()=>{

        expect(object.data()).toBe(result);
        expect(called).toBe(1);

        expect(object.data()).toBe(result);
        expect(object.data()).toBe(object.data());
        expect(called).toBe(1);

    });
});


describe('argument', ()=>{


    let called = 0;
    let result : string;

    class Test {

        @MemoizeMethod()
        data (number : number) : string {

            called++;
            return number.toString();
        }
    }

    let object = new Test();

    it('check initial', ()=>{

        expect(called).toBe(0);

    });

    it('check value', ()=>{

        result = object.data(Math.random());
        expect(typeof result).toBe('string');
        expect(called).toBe(1);

    });

    it('re-check value', ()=>{

        expect(object.data(Math.random())).toBe(result);
        expect(called).toBe(1);

        expect(object.data(Math.random())).toBe(result);
        expect(object.data(Math.random())).toBe(object.data(Math.random()));
        expect(called).toBe(1);

    });
});
