import Container from "../../dist/builder/builder";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

interface Test {

    property : string;
}

let container = new Container<Test, void, void>(undefined);
let callback = function (target, key) {
    target[key] = 'string';
};

container.set('property', callback);
let built = container.build({});

it('check value', ()=>{
    expect(built.property).toBe('string');
});

