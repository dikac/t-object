import Container from "../../dist/builder/builder";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

interface Test {

    property : string;
}


let container = new Container<Test>(undefined);
let callback = function (target, key) {
    target[key] = 'string';
};

it('empty', ()=>{
    expect(container.has('property')).toBe(false);
    expect(container.get('property')).toBe(undefined);
});

it('set value', ()=>{
    container.set('property', callback);
});

it('empty', ()=>{
    expect(container.has('property')).toBe(true);
    expect(container.get('property')).toBe(callback);
});

it('delete', ()=>{
    container.delete('property');
});

it('after delete', ()=>{
    expect(container.has('property')).toBe(false);
    expect(container.get('property')).toBe(undefined);
});

