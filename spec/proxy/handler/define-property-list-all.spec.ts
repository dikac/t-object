import DefinePropertyHandler from "../../../dist/proxy/handler/define-property-list-all";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('direct set', () => {

    it('define property', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter)

        proxy['data'] = 'data'

        // @ts-expect-error
        expect(class_.data).toBe('data');
        // @ts-expect-error
        expect(original.data).toBe('data');
        // @ts-expect-error
        expect(object.data).toBe('data');

    });

    it('define getter', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter)

        Object.defineProperty(proxy, 'data',{
            get: function() {
                return 5;
            }
        });

        // @ts-expect-error
        expect(class_.data).toBe(5);
        // @ts-expect-error
        expect(original.data).toBe(5);
        // @ts-expect-error
        expect(object.data).toBe(5);

    });

    it('define setter', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter)


        // define property
        proxy['value'] = null;

        // define setter
        Object.defineProperty(proxy, 'data',{
            set: function(value) {
                this.value = value;
            }
        });

        // @ts-expect-error
        proxy.value = 5;

        // @ts-expect-error
        expect(class_.value).toBe(5);

        // @ts-expect-error
        expect(original.value).toBe(5);

        // @ts-expect-error
        expect(object.value).toBe(5);

    });

});

describe('bind', () => {

    it('define property', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}));

        proxy['data'] = 'data'

        // @ts-expect-error
        expect(class_.data).toBe('data');
        // @ts-expect-error
        expect(original.data).toBe('data');
        // @ts-expect-error
        expect(object.data).toBe('data');

    });

    it('define getter', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}))

        Object.defineProperty(proxy, 'data',{
            get: function() {
                return 5;
            }
        });

        // @ts-expect-error
        expect(class_.data).toBe(5);
        // @ts-expect-error
        expect(original.data).toBe(5);
        // @ts-expect-error
        expect(object.data).toBe(5);

    });

    it('define setter', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}))


        // define property
        proxy['value'] = null;

        // define setter
        Object.defineProperty(proxy, 'data',{
            set: function(value) {
                this.value = value;
            }
        });

        // @ts-expect-error
        proxy.value = 5;

        // @ts-expect-error
        expect(class_.value).toBe(5);

        // @ts-expect-error
        expect(original.value).toBe(5);

        // @ts-expect-error
        expect(object.value).toBe(5);

    });

});


describe('sealed', () => {

    it('handler object', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        Object.seal(object);

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}));

        try {
            proxy['data'] = 'data'
            fail('exception should be trhown')
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('handler class', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        Object.seal(class_);

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}));

        try {
            proxy['data'] = 'data'
            fail('exception should be trhown')
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('handler original', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        Object.seal(class_);

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}));

        try {
            proxy['data'] = 'data'
            fail('exception should be trhown')
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe('freeze', () => {

    it('handler object', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        Object.freeze(object);

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}));

        try {
            proxy['data'] = 'data'
            fail('exception should be trhown')
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('handler class', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        Object.freeze(class_);

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}));

        try {
            proxy['data'] = 'data'
            fail('exception should be trhown')
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('handler original', ()=>{

        class Class  {}

        let object = {};
        let class_ = new Class;
        let original = {};

        Object.freeze(original);

        let getter = new DefinePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}));

        try {
            proxy['data'] = 'data'
            fail('exception should be trhown')
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});
