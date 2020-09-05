import MemoizeGetterBind from "../../dist/set-getter-callback";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    let called = 0;
    let result : string;
    let soruce = {};

    let object = MemoizeGetterBind(soruce, 'data', () =>{
        called++;
        return Math.random().toString();
    });


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

    let calledClass = 0;
    let calledCallback = 0;
    let result : string;

    class Test {

        get data ()  {
            calledClass++;
            return 1;
        }
    }

    let source = new Test();


    let object = MemoizeGetterBind(source, 'data', () =>{
        calledCallback++;
        return Math.random().toString();
    });

    it('check initial', ()=>{

        expect(calledClass).toBe(0);
        expect(calledCallback).toBe(0);

    });

    it('check value', ()=>{

        result = object.data;
        expect(typeof result).toBe('string');
        expect(calledClass).toBe(0);
        expect(calledCallback).toBe(1);

    });

    it('re-check value', ()=>{

        expect(object.data).toBe(result);
        expect(calledClass).toBe(0);
        expect(calledCallback).toBe(1);

        expect(object.data).toBe(result);
        expect(object.data).toBe(object.data);
        expect(calledClass).toBe(0);
        expect(calledCallback).toBe(1);

    });

});

