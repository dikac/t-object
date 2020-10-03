import MemoizeMethod from "../../../dist/function/memoize-method";
import Property from "../../../dist/descriptor/boolean/property";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

class Test {

    get random() : string {
        return Math.random().toString();
    }

    @MemoizeMethod()
    data () : string {

        return this.random;
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

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exist');
        }

    });
})


it('call', ()=>{

    const value = object.data();

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

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exist');
        }

    });

});




