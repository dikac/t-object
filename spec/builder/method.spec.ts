import Container from "../../dist/builder/builder";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

interface Test {

    method () : string;
}

let container = new Container<Test>(undefined);
let built : Test;

it('register method', ()=>{

    container.set('method', function (target, key) {

        target[key] = ()=>'string';

    });

});

it('build', ()=>{

    built = container.build({}, undefined);
});


it('check value', ()=>{

    expect(built.method()).toBe('string');
});




