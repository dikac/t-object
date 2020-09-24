import MemoizeAccessor from "../../../dist/function/memoize-property";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let called = 0;
let result : number;

class Test {

    constructor(public value : number) {
    }

    @MemoizeAccessor()
    get data () : number {
        called++;
        return this.value;
    }
}

let object = new Test(1);


it('check initial', ()=>{

    expect(called).toBe(0);

});

it('check value', ()=>{

    result = object.data;
    expect(typeof result).toBe('number');
    expect(called).toBe(1);
});


it('re-check value', ()=>{

    expect(object.data).toBe(result);
    expect(called).toBe(1);

    expect(object.data).toBe(result);
    expect(object.data).toBe(object.data);
    expect(called).toBe(1);

});

it('mutate value', ()=>{

    object.value = 22;

});

it('re-check value', ()=>{

    expect(object.data).toBe(result);
    expect(called).toBe(1);

    expect(object.data).toBe(result);
    expect(object.data).toBe(object.data);
    expect(called).toBe(1);

});
