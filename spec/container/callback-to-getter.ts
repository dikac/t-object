import Container from "../../dist/container/container";
import MemoizeGetterBind from "../../dist/value/value/memoize-getter-bind";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

interface Test {

    property : string;
}

let container = new Container<Test>(undefined);

let called : number = 0;
let built : Test;

it('register method', ()=>{

    container.set('property', (target, key)=>MemoizeGetterBind(target, key, function (){

        called++;
        return 'data';

    }));

});

it('build', ()=>{

    built = container.build({}, undefined);
    expect(called).toBe(0);
});

it('check first call', ()=>{

    expect(called).toBe(1);
    expect(built.property).toBe('string');

});

it('check second', ()=>{

    expect(called).toBe(1);
    expect(built.property).toBe('string');

});
