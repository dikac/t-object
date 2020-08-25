import MemoizeGetter from "../../../../dist/value/value/memoize-getter";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    let called = 0;
    let result : string;
    let object = {

        get data ()  {

            return MemoizeGetter(this, 'data', () =>{
                called++;
                return Math.random().toString();
            });
        }
    }

    it('check initial', ()=>{

        expect(called).toBe(0);

    });

    it('check value', ()=>{

        result = object.data;
        expect(typeof result).toBe('string');
        expect(called).toBe(1);

    });

    it('re-check value', ()=>{

        expect(object.data).toBe(result);
        expect(called).toBe(1);

        expect(object.data).toBe(result);
        expect(object.data).toBe(object.data);
        expect(called).toBe(1);

    });

});


describe('class', () => {

    let called = 0;
    let result : string;

    class Test {

        get data ()  {

            return MemoizeGetter(this, 'data', () =>{
                called++;
                return Math.random().toString();
            });
        }
    }

    let object = new Test();

    it('check initial', ()=>{

        expect(called).toBe(0);

    });

    it('check value', ()=>{

        result = object.data;
        expect(typeof result).toBe('string');
        expect(called).toBe(1);

    });

    it('re-check value', ()=>{

        expect(object.data).toBe(result);
        expect(called).toBe(1);

        expect(object.data).toBe(result);
        expect(object.data).toBe(object.data);
        expect(called).toBe(1);

    });

});

