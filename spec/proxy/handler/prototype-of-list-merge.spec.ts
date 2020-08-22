import GetPrototypeOfListMerge from "../../../dist/proxy/handler/prototype-of-list-merge";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('direct set', () => {

    class Class  {
        data : string = 'class'
    }

    class Getter  {
        get value () {return 'class'}
    }

    class Setter  {
        set value (data) {}
    }

    let class_ = new Class;
    let getter = new Getter;
    let setter = new Setter;

    it('descriptor', ()=>{


        let prototype = new GetPrototypeOfListMerge([getter, class_, setter]);
        let proxy = new Proxy({}, prototype);


        let value = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(proxy), 'value');

        if(value) {

            expect(typeof value.configurable).toBe("boolean");
            expect(typeof value.enumerable).toBe("boolean");
            expect(typeof value.get).toBe("function");
            expect(typeof value.set).toBe("function");

        } else {

            fail('descriptor should exists')
        }

        expect(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(proxy), 'data')).toBeUndefined();
        expect(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(class_), 'data')).toBeUndefined();
    });
});
//
// describe('bind', () => {
//
//     it('delete', ()=>{
//
//         class Class  {
//             data : string = 'class'
//         }
//
//         let object = {
//             data : 'plain'
//         };
//
//         let class_ = new Class;
//
//         let original = {
//             data : 'original'
//         };
//
//         let getter = new DeletePropertyHandler([object, class_]);
//         let proxy = new Proxy(original, getter.bindTo({}))
//
//         expect(class_.data).toBe('class');
//         expect(original.data).toBe('original');
//         expect(object.data).toBe('plain');
//
//         expect(delete proxy.data).toBe(true);
//
//         expect<any>(class_.data).toBe(undefined);
//         expect<any>(original.data).toBe(undefined);
//         expect<any>(object.data).toBe(undefined);
//     });
// });
