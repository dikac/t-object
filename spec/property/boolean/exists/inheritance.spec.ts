import Property from "../../../../dist/property/boolean/exists";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});



it(`native method`, () => {

    class Class extends Array{

        constructor() {
            super();
        }
    }

    expect(Property([], 'splice')).toBe(true)
});

it(`method`, () => {

    class Parent {

        constructor(public parent: number) {
        }
    }

    class Children extends Parent {

        constructor(
            parent: number,
            public children: number
        ) {
            super(parent);
        }
    }

    let object = new Children(1, 2);
    expect(Property(object, 'parent')).toBe(true);
    expect(Property(object, 'children')).toBe(true);
});

// it(`property`, () => {
//
//     let object =  {
//         test : 1
//     }
//     expect(Property(object, 'test')).toBe(true);
// });
//
// it(`getter`, () => {
//
//     class Getter {
//         get test () { return 1 }
//     }
//     expect(Property(new Getter(), 'test')).toBe(true);
// });
//
// it(`setter`, () => {
//
//     class Setter {
//         set test (value) {}
//     }
//     expect(Property(new Setter(), 'test')).toBe(true);
// });
//
// it(`implicit undefined`, () => {
//
//     let test =  {
//         test : undefined
//     }
//     expect(Property(test, 'test')).toBe(true);
// });
//
// it(`not exist`, () => {
//
//     let test =  {
//     }
//     expect(Property(test, 'test')).toBe(false);
// });
//
//
// it(`symbol`, () => {
//
//     expect(Property(new Map(), Symbol.iterator)).toBe(true);
// });
//
