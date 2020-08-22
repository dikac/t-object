import GetHandler from "../../../../dist/proxy/handler/get-list-first";
import GetOwnPropertyDescriptorListAll from "../../../../dist/proxy/handler/get-own-property-descriptor-list-all";
import MergeAnonymous from "../../../../dist/proxy/handler/merge-anonymous";
import GetPrototypeOfListMerge from "../../../../dist/proxy/handler/prototype-of-list-merge";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

type Type<Value = any> = {data:Value};

const plain = {
    get data() {return 'plain'}
}

class Symbol_ implements Iterable<string> {

    constructor(
        public iterable : string[]
    ) {

    }

    * [Symbol.iterator](): IterableIterator<string> {

        yield * this.iterable;
    }
}

class Getter  {
    get data() {return 'getter'}
}

class Setter  {

    public value : any

    set data(value) {

        this.value = value;
    }
}

class Property {

    constructor(
        public data : string = 'property'
    ) {

    }

}

class Method {

    data() : string {

        return 'method';
    }
}
//
// describe('direct set', () => {
//
//     let property1 = new Property('property 1');
//     let property2 = new Property('property 2');
//
//     let getter = new GetHandler([property1, property2]);
//     let proxy = new Proxy<Type<string>>(<Type<string>>{}, getter)
//
//     it('check value', ()=>{
//
//         expect(proxy.data).toBe('property 1');
//         expect(getter.handle()['data']).toBe(property1);
//     });
//
// });
//
// describe('bind set', () => {
//
//     let handler = {};
//     let property1 = new Property('property 1');
//     let property2 = new Property('property 2');
//
//     let getter = new GetHandler([property1, property2]);
//     getter.bindTo(handler);
//
//     let proxy = new Proxy<Type<string>>(<Type<string>>{}, handler)
//
//     for(let i = 0; i < 5; i++) {
//
//         it('check & recheck value', () => {
//
//             expect(proxy.data).toBe('property 1');
//             expect(getter.handle()['data']).toBe(property1);
//         });
//     }
//
// });
//
//
// for(let i = 0; i < 5; i++) {
//
//     describe('order', () => {
//
//         let list = [
//             plain,
//             new Property,
//             new Getter
//         ];
//
//         Shuffle(list);
//
//         let getter = new GetHandler(list);
//         let proxy = new Proxy<Type<string>>(<Type<string>>{}, getter);
//
//         // retest
//         for(let i = 0; i < 5; i++) {
//
//             it('compare data', ()=> {
//
//                 expect(proxy.data).toBe(list[0].data);
//             });
//
//             it('compare instance', ()=> {
//
//                 if(getter.handle()['data'] === plain) {
//
//                     expect(proxy.data).toBe('plain')
//
//                 } else if(getter.handle()['data'] instanceof Property) {
//
//                     expect(proxy.data).toBe('property')
//
//                 } else if(getter.handle()['data'] instanceof Getter) {
//
//                     expect(proxy.data).toBe('getter')
//
//                 } else {
//
//                     fail('container list is not assigned ho handler')
//                 }
//             });
//
//         }
//     });
// }
//
//
// describe('direct set', () => {
//
//     let property1 = new Property('property 1');
//     let property2 = new Symbol_(['1', '2', '2', '3']);
//
//     let getter = new GetHandler([property1, property2]);
//     let proxy = <Property & Symbol_> new Proxy({}, getter)
//
//     it('check value', ()=>{
//
//         let iterated : boolean = false;
//
//         let i = 0;
//
//         for (let string of proxy) {
//
//             iterated = true;
//
//             expect(proxy.data).toBe('property 1');
//             expect(getter.handle()['data']).toBe(property1);
//
//             expect(property2.iterable[i]).toBe(string);
//
//             i++;
//         }
//
//         expect(iterated).toBeTrue();
//
//     });
//
// });
//

describe('direct set recursive', () => {

    let property1 = new Property('property 1');
    let property2 = new Symbol_(['1', '2', '2', '3']);

    let getter = new GetHandler([property1, property2]);
    let prototypeOfListMerge = new GetPrototypeOfListMerge([property1, property2]);
    let descriptor = new GetOwnPropertyDescriptorListAll([property1, property2]);
    let proxy = <Property & Symbol_> new Proxy({}, MergeAnonymous(getter, descriptor,  prototypeOfListMerge));

    let getter1 = new GetHandler([proxy]);
    let prototypeOfListMerge1 = new GetPrototypeOfListMerge([proxy, /*property2*/]);
    let descriptor1 = new GetOwnPropertyDescriptorListAll([proxy]);
    let proxy1 = <Property & Symbol_> new Proxy({}, MergeAnonymous(getter1, descriptor1,  prototypeOfListMerge1));

    let getter2 = new GetHandler([proxy1]);
    let proxy2 = <Property & Symbol_> new Proxy({}, getter2)

    it('check value', ()=>{

        let iterated : boolean = false;

        let i = 0;

        for (let string of proxy2) {

            iterated = true;

            expect(proxy2.data).toBe('property 1');

            expect(property2.iterable[i]).toBe(string);

            i++;
        }

        expect(iterated).toBeTrue();

    });

});
