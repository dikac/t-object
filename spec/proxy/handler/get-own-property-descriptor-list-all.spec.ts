import GetOwnPropertyDescriptorList from "../../../dist/proxy/handler/get-own-property-descriptor-list-all";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

const Plain = {
    plain : 1
}

class Getter  {
    get getter() {return 'getter'}
}

class Setter  {

    set setter(value) {}
}

class Property {
    public property : string = 'property'
    constructor(

    ) {
    }
}

class Method {

    method() : string {

        return 'method';
    }
}


describe('direct set', () => {

    it('test', ()=>{

        let plain = Plain;
        let getter_ = new Getter();
        let setter = new Setter();
        let property = new Property();
        let method = new Method();
        let original = {};

        let handlers = [plain, getter_, setter, property, method];
        let getter = new GetOwnPropertyDescriptorList(handlers);
        let proxy = new Proxy(original, getter)


        expect(Object.getOwnPropertyDescriptor(proxy, 'plain')).toEqual(Object.getOwnPropertyDescriptor(plain, 'plain'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'getter')).toEqual(Object.getOwnPropertyDescriptor(getter_, 'getter'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'setter')).toEqual(Object.getOwnPropertyDescriptor(setter, 'setter'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'property')).toEqual(Object.getOwnPropertyDescriptor(property, 'property'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'method')).toEqual(Object.getOwnPropertyDescriptor(method, 'method'));
    });
});

describe('bind', () => {

    it('test', ()=>{

        let plain = Plain;
        let getter_ = new Getter();
        let setter = new Setter();
        let property = new Property();
        let method = new Method();
        let original = {};

        let handlers = [plain, getter_, setter, property, method];
        let getter = new GetOwnPropertyDescriptorList(handlers);
        let proxy = new Proxy(original, getter.bindTo({}))

        expect(Object.getOwnPropertyDescriptor(proxy, 'plain')).toEqual(Object.getOwnPropertyDescriptor(plain, 'plain'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'getter')).toEqual(Object.getOwnPropertyDescriptor(getter_, 'getter'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'setter')).toEqual(Object.getOwnPropertyDescriptor(setter, 'setter'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'property')).toEqual(Object.getOwnPropertyDescriptor(property, 'property'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'method')).toEqual(Object.getOwnPropertyDescriptor(method, 'method'));
    });
});


describe('conflict compatible', () => {

    it('simple', ()=>{

        let plain2 = {
            plain : 1
        }
        let plain = Plain;
        let original = {};

        let handlers = [plain, plain2];
        let getter = new GetOwnPropertyDescriptorList(handlers);
        let proxy = new Proxy(original, getter.bindTo({}))

        expect(Object.getOwnPropertyDescriptor(proxy, 'plain')).toEqual(Object.getOwnPropertyDescriptor(plain, 'plain'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'plain')).toEqual(Object.getOwnPropertyDescriptor(plain2, 'plain'));

    });

    it('different value', ()=>{

        let plain2 = {
            plain : 2
        }
        let plain = Plain;
        let original = {};

        let handlers = [plain, plain2];
        let getter = new GetOwnPropertyDescriptorList(handlers);
        let proxy = new Proxy(original, getter.bindTo({}))

        expect(Object.getOwnPropertyDescriptor(proxy, 'plain')).toEqual(Object.getOwnPropertyDescriptor(plain, 'plain'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'plain')).not.toEqual(Object.getOwnPropertyDescriptor(plain2, 'plain'));

    });

    it('duplicate', ()=>{

        let plain = Plain;
        let getter_ = new Getter();
        let setter = new Setter();
        let property = new Property();
        let method = new Method();
        let original = {};

        let handlers = [
            plain, getter_, setter, property, method,
            plain, getter_, setter, property, method,
            plain, getter_, setter, property, method
        ];
        let getter = new GetOwnPropertyDescriptorList(handlers);
        let proxy = new Proxy(original, getter.bindTo({}))

        expect(Object.getOwnPropertyDescriptor(proxy, 'plain')).toEqual(Object.getOwnPropertyDescriptor(plain, 'plain'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'getter')).toEqual(Object.getOwnPropertyDescriptor(getter_, 'getter'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'setter')).toEqual(Object.getOwnPropertyDescriptor(setter, 'setter'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'property')).toEqual(Object.getOwnPropertyDescriptor(property, 'property'));
        expect(Object.getOwnPropertyDescriptor(proxy, 'method')).toEqual(Object.getOwnPropertyDescriptor(method, 'method'));
    });
});


describe('conflict incompatible', () => {

    it('simple', ()=>{

        let plain2 = {
            get plain () {return 1}
        }
        let plain = Plain;
        let original = {};

        let handlers = [plain, plain2];
        let getter = new GetOwnPropertyDescriptorList(handlers);
        let proxy = new Proxy(original, getter.bindTo({}))

        try {

            Object.getOwnPropertyDescriptor(proxy, 'plain');
            fail('error should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});
