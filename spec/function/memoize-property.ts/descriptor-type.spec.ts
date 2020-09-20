import MemoizeProperty from "../../../dist/function/memoize-property";
import Property from "../../../dist/descriptor/boolean/property";
import Getter from "../../../dist/descriptor/boolean/getter";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let called = 0;

class Test {

    @MemoizeProperty()
    get data () : string {

        called++;
        return Math.random().toString();
    }
}

let object = new Test();

describe('before call', ()=>{

    it('instance does not have descriptor', ()=>{

        const descriptor = Object.getOwnPropertyDescriptor(object, 'data');

        expect(descriptor).toBe(undefined);

    });

    it('prototype does have descriptor', ()=>{

        const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(object), 'data');

        if(descriptor) {

            expect(Getter(descriptor)).toBe(true);

        } else {

            fail('descriptor should exist');
        }

    });
})


it('call', ()=>{

    const value = object.data;

});

describe('after call', ()=>{


    it('instance does have descriptor', ()=>{

        const descriptor = Object.getOwnPropertyDescriptor(object, 'data');

        if(descriptor) {

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exist');
        }

    });

    it('prototype does have descriptor', ()=>{

        const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(object), 'data');

        if(descriptor) {

            expect(Getter(descriptor)).toBe(true);

        } else {

            fail('descriptor should exist');
        }

    });

});


