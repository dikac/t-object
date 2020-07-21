import Mixin from "../dist/merge";
import {Mutable} from "utility-types";
import {InspectOptions} from "util";
it("enable console log", () => { spyOn(console, 'log').and.callThrough()});


class Accessor {

    constructor(
        private _value : number = 0
    ) {

    }

    get value() : number {

        return this._value;
    }
}

class Mutator {

    constructor(
        private _value : number = 0
    ) {

    }

    set value(value : number) {

         this._value = value;
    }
}

class Method {

    constructor(
        private data : string = ''
    ) {

    }

    setData(data : string) {

        this.data = data;
    }

    getData() : string {

        return this.data;
    }
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

class Property {

    constructor(
        public data : string = 'data'
    ) {

    }

}

describe('single', function () {

    describe('plain', () => {

        let accessor = {};
        let mixin = Mixin(accessor);

        it('result should equal', () => {
            expect(mixin).toBe(accessor);
        });
    });

    describe('mutator', () => {

        let accessor = new Mutator(10);
        let mixin = Mixin(accessor);

        it('default', () => {

            expect(mixin.value).toBeUndefined();

        });
    });

    describe('method', () => {

        let method = new Method('a');
        let mixin = Mixin(method);

        it('default', () => {

            expect(typeof mixin.getData).toBe('function');
            expect(typeof mixin.setData).toBe('function');
            expect(mixin.getData()).toBe('a');

        });

        it('mutated', () => {

            mixin.setData('c');
            expect(mixin.getData()).toBe('c');

        });

        it('original', () => {

            expect(typeof method.getData).toBe('function');
            expect(typeof method.setData).toBe('function');
            expect(method.getData()).toBe('c');
        });

    });

    describe('symbol', () => {

        let data = ['a', 'b'];
        let data2 = ['aa', 'bb', 'cc'];
        let symbol = new Symbol_(data);
        let mixin = Mixin(symbol);

        it('default', () => {

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i]);
                i++;
            }

        });

        it('mutated', () => {

            mixin.iterable = data2;

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }

        });

        it('original', () => {

            let i = 0;
            for (let val of symbol) {
                expect(val).toBe(data2[i]);
                i++;
            }

        });
    });

    describe('property', () => {

        let property = new Property('string');
        let mixin = Mixin(property);

        it('default', () => {

            expect(mixin.data).toBe('string');

        });

        it('mutated', () => {

            mixin.data = 'string2';
            expect(mixin.data).toBe('string2');

        });

        it('original', () => {

            expect(property.data).toBe('string2');
        });
    });
})


describe('plain object', () => {

    describe('with accessor', () => {

        let object = {};
        let accessor = new Accessor(10);
        let mixin = Mixin(object, accessor);

        it('initial check', () => {

            expect(mixin.value).toBe(10);
            // @ts-ignore
            expect(mixin).toBe(object);

        });
    });

    describe('with method', () => {

        let method = new Method('a');
        let mixin = Mixin({}, method);

        it('default', () => {

            expect(typeof mixin.getData).toBe('function');
            expect(typeof mixin.setData).toBe('function');
            expect(mixin.getData()).toBe('a');

        });

        it('mutated', () => {

            mixin.setData('c');
            expect(mixin.getData()).toBe('c');

        });

        it('original', () => {

            expect(typeof method.getData).toBe('function');
            expect(typeof method.setData).toBe('function');
            expect(method.getData()).toBe('a');
        });

    });

    describe('with symbol', () => {

        let data = ['a', 'b'];
        let data2 = ['aa', 'bb', 'cc'];
        let symbol = new Symbol_(data);
        let mixin = Mixin({}, symbol);

        it('default', () => {

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i]);
                i++;
            }

        });

        it('mutated', () => {

            mixin.iterable = data2;

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }

        });

        it('original', () => {

            let i = 0;
            for (let val of symbol) {
                expect(val).toBe(data[i]);
                i++;
            }

        });
    });


    describe('with property', () => {

        let property = new Property('string');
        let mixin = Mixin({}, property);

        it('default', () => {

            expect(mixin.data).toBe('string');

        });

        it('mutated', () => {

            mixin.data = 'string2';
            expect(mixin.data).toBe('string2');

        });

        it('original', () => {

            expect(property.data).toBe('string');
        });
    });


    describe('with accessor, mutator, method', () => {

        let method = new Method('str');
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Method> Mixin({}, accessor, mutator, method);

        it('default', () => {

            expect(mixin.getData()).toBe('str', 'mixin.getData default');
            expect(mixin.value).toBe(2, 'mixin.value default');
        });

        it('mutated', () => {

            mixin.value = 10;
            mixin.setData('data');
            expect(mixin.getData()).toBe('data', 'set mixin.getData');
            expect(mixin.value).toBe(10, 'set mixin.value');

        });

        it('original', () => {

            expect(accessor.value).toBe(1, 'method.getData default');
            expect(method.getData()).toBe('str', 'accessor.value default');
            expect(mutator.value).toBeUndefined();

        });
    });

    describe('with accessor, mutator, symbol', () => {

        let data = ['a', 'b'];

        let symbol = new Symbol_(data);
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Symbol_> Mixin({}, accessor, mutator, symbol);

        it('default', () => {

            expect(mixin.value).toBe(2, 'mixin.value');

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i], `mixin[Symbol.iterator] ${i}`);
                i++;
            }
        });

        it('mutated', () => {

            mixin.value = 10;
            let data2 = ['aa', 'bb', 'cc'];
            mixin.iterable = data2;

            expect(mixin.value).toBe(10, 'mixin.value');

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }
        });

        it('original', () => {

            let k = 0;
            for (let val of symbol) {
                expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
                k++;
            }

            expect(accessor.value).toBe(1, 'method.getData');

            expect(mutator.value).toBeUndefined();
        });

    });

    describe('with accessor, mutator, symbol, method, property', () => {

        let data = ['a', 'b'];

        let symbol = new Symbol_(data);
        let method = new Method('method');
        let property = new Property('property');
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Symbol_ & Mutable<Method> & Property> Mixin({}, accessor, mutator, symbol, method, property);

        it('default', () => {

            expect(mixin.value).toBe(2, 'mixin.value');
            expect(mixin.getData()).toBe('property', 'method.getData');
            expect(mixin.data).toBe('property', 'method.getData');

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i], `mixin[Symbol.iterator] ${i}`);
                i++;
            }
        });

        it('mutated', () => {

            mixin.setData('data');
            mixin.value = 10;
            let data2 = ['aa', 'bb', 'cc'];
            mixin.iterable = data2;

            expect(mixin.value).toBe(10, 'mixin.value');
            expect(mixin.getData()).toBe('data', 'mixin.getData');
            expect(mixin.data).toBe('data', 'mixin.data');

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }
        });

        it('original', () => {

            let k = 0;
            for (let val of symbol) {
                expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
                k++;
            }

            expect(accessor.value).toBe(1, 'method.getData');
            expect(property.data).toBe('property', 'property.data');
            expect(method.getData()).toBe('method', 'method.getData');

            expect(mutator.value).toBeUndefined();
        });

    });
});


describe('function', () => {

    describe('with accessor', () => {


            let fn = () => 'fn';
            let accessor = new Accessor(10);
            let mixin = Mixin(fn, accessor);

            it('initial check', () => {

                expect(mixin.value).toBe(10);
                // @ts-ignore
                expect(mixin).toBe(fn);

                expect(mixin()).toBe('fn');

            });


    });

    describe('with method', () => {

        let method = new Method('a');
        let fn = () => 'fn';
        let mixin = Mixin(fn, method);

        it('default', () => {

            expect(typeof mixin.getData).toBe('function');
            expect(typeof mixin.setData).toBe('function');
            expect(mixin.getData()).toBe('a');

            expect(mixin).toBe(fn);
            expect(mixin()).toBe('fn');
        });

        it('mutated', () => {

            mixin.setData('c');
            expect(mixin.getData()).toBe('c');

        });

        it('original', () => {

            expect(typeof method.getData).toBe('function');
            expect(typeof method.setData).toBe('function');
            expect(method.getData()).toBe('a');
        });

    });

    describe('with symbol', () => {

        let data = ['a', 'b'];
        let data2 = ['aa', 'bb', 'cc'];
        let symbol = new Symbol_(data);
        let fn = () => 'fn';
        let mixin = Mixin(fn, symbol);

        it('default', () => {

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i]);
                i++;
            }

            expect(mixin).toBe(fn);
            expect(mixin()).toBe('fn');

        });

        it('mutated', () => {

            mixin.iterable = data2;

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }

        });

        it('original', () => {

            let i = 0;
            for (let val of symbol) {
                expect(val).toBe(data[i]);
                i++;
            }

        });
    });


    describe('with property', () => {

        let property = new Property('string');
        let fn = () => 'fn';
        let mixin = Mixin(fn, property);

        it('default', () => {

            expect(mixin.data).toBe('string');
            expect(mixin).toBe(fn);
            expect(mixin()).toBe('fn');
        });

        it('mutated', () => {

            mixin.data = 'string2';
            expect(mixin.data).toBe('string2');

        });

        it('original', () => {

            expect(property.data).toBe('string');
        });
    });


    describe('with accessor, mutator, method', () => {

        let method = new Method('str');
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let fn = () => 'fn';
        let mixin = <Mutable<Accessor> & Mutator & Method & typeof fn> Mixin(fn, accessor, mutator, method);

        it('default', () => {

            expect(mixin.getData()).toBe('str', 'mixin.getData default');
            expect(mixin.value).toBe(2, 'mixin.value default');

            expect(mixin).toBe(fn);
            expect(mixin()).toBe('fn');
        });

        it('mutated', () => {

            mixin.value = 10;
            mixin.setData('data');
            expect(mixin.getData()).toBe('data', 'set mixin.getData');
            expect(mixin.value).toBe(10, 'set mixin.value');

        });

        it('original', () => {

            expect(accessor.value).toBe(1, 'method.getData default');
            expect(method.getData()).toBe('str', 'accessor.value default');
            expect(mutator.value).toBeUndefined();

        });
    });

    describe('with accessor, mutator, symbol', () => {

        let data = ['a', 'b'];
        let fn = () => 'fn';
        let symbol = new Symbol_(data);
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Symbol_ & typeof fn> Mixin(fn, accessor, mutator, symbol);

        it('default', () => {

            expect(mixin.value).toBe(2, 'mixin.value');

            expect(mixin).toBe(fn);
            expect(mixin()).toBe('fn');

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i], `mixin[Symbol.iterator] ${i}`);
                i++;
            }
        });

        it('mutated', () => {

            mixin.value = 10;
            let data2 = ['aa', 'bb', 'cc'];
            mixin.iterable = data2;

            expect(mixin.value).toBe(10, 'mixin.value');

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }
        });

        it('original', () => {

            let k = 0;
            for (let val of symbol) {
                expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
                k++;
            }

            expect(accessor.value).toBe(1, 'method.getData');

            expect(mutator.value).toBeUndefined();
        });

    });

    describe('with accessor, mutator, symbol, method, property', () => {

        let data = ['a', 'b'];
        let fn = () => 'fn';
        let symbol = new Symbol_(data);
        let method = new Method('method');
        let property = new Property('property');
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Symbol_ & Mutable<Method> & Property & typeof fn> Mixin(fn, accessor, mutator, symbol, method, property);

        it('default', () => {

            expect(mixin).toBe(fn);
            expect(mixin()).toBe('fn');

            expect(mixin.value).toBe(2, 'mixin.value');
            expect(mixin.getData()).toBe('property', 'method.getData');
            expect(mixin.data).toBe('property', 'method.getData');

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i], `mixin[Symbol.iterator] ${i}`);
                i++;
            }
        });

        it('mutated', () => {

            mixin.setData('data');
            mixin.value = 10;
            let data2 = ['aa', 'bb', 'cc'];
            mixin.iterable = data2;

            expect(mixin.value).toBe(10, 'mixin.value');
            expect(mixin.getData()).toBe('data', 'mixin.getData');
            expect(mixin.data).toBe('data', 'mixin.data');

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }
        });

        it('original', () => {

            let k = 0;
            for (let val of symbol) {
                expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
                k++;
            }

            expect(accessor.value).toBe(1, 'method.getData');
            expect(property.data).toBe('property', 'property.data');
            expect(method.getData()).toBe('method', 'method.getData');

            expect(mutator.value).toBeUndefined();
        });

    });
});



describe('accessor', () => {

    describe('with mutator', () => {

        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor>> Mixin(accessor, mutator);

        it('default', () => {

            expect(mixin.value).toBe(2, 'mixin');

        });

        it('mutated', () => {

            mixin.value = 10;
            expect(mixin.value).toBe(10, 'mixin after set');
        });

        it('original', () => {

            expect(accessor.value).toBe(10, 'accessor');
            expect(mutator.value).toBeUndefined();

        });

    });


    describe('with mutator, method', () => {

        let method = new Method('str');
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Method> Mixin(accessor, mutator, method);

        it('default', () => {

            expect(mixin.getData()).toBe('str', 'mixin.getData default');
            expect(mixin.value).toBe(2, 'mixin.value default');
        });

        it('mutated', () => {

            mixin.value = 10;
            mixin.setData('data');
            expect(mixin.getData()).toBe('data', 'set mixin.getData');
            expect(mixin.value).toBe(10, 'set mixin.value');

        });

        it('original', () => {

            expect(accessor.value).toBe(10, 'method.getData default');
            expect(method.getData()).toBe('str', 'accessor.value default');
            expect(mutator.value).toBeUndefined();

        });
    });

    describe('with mutator, symbol', () => {

        let data = ['a', 'b'];

        let symbol = new Symbol_(data);
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Symbol_> Mixin(accessor, mutator, symbol);

        it('default', () => {

            expect(mixin.value).toBe(2, 'mixin.value');

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i], `mixin[Symbol.iterator] ${i}`);
                i++;
            }
        });

        it('mutated', () => {

            mixin.value = 10;
            let data2 = ['aa', 'bb', 'cc'];
            mixin.iterable = data2;

            expect(mixin.value).toBe(10, 'mixin.value');

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }
        });

        it('original', () => {

            let k = 0;
            for (let val of symbol) {
                expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
                k++;
            }

            expect(accessor.value).toBe(10, 'method.getData');

            expect(mutator.value).toBeUndefined();
        });

    });

    describe('with mutator, symbol, method, property', () => {

        let data = ['a', 'b'];

        let symbol = new Symbol_(data);
        let method = new Method('method');
        let property = new Property('property');
        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Symbol_ & Mutable<Method> & Property> Mixin(accessor, mutator, symbol, method, property);

        it('default', () => {

            expect(mixin.value).toBe(2, 'mixin.value');
            expect(mixin.getData()).toBe('property', 'method.getData');
            expect(mixin.data).toBe('property', 'method.getData');

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i], `mixin[Symbol.iterator] ${i}`);
                i++;
            }
        });

        it('mutated', () => {

            mixin.setData('data');
            mixin.value = 10;
            let data2 = ['aa', 'bb', 'cc'];
            mixin.iterable = data2;

            expect(mixin.value).toBe(10, 'mixin.value');
            expect(mixin.getData()).toBe('data', 'mixin.getData');
            expect(mixin.data).toBe('data', 'mixin.data');

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }
        });

        it('original', () => {

            let k = 0;
            for (let val of symbol) {
                expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
                k++;
            }

            expect(accessor.value).toBe(10, 'method.getData');
            expect(property.data).toBe('property', 'property.data');
            expect(method.getData()).toBe('method', 'method.getData');

            expect(mutator.value).toBeUndefined();
        });

    });

});

describe('mutator', () => {

    describe('with accessor', () => {

        let accessor = new Accessor(1);
        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor>> Mixin(mutator, accessor);

        it('default', () => {

            expect(mixin.value).toBe(1, 'mixin');

        });

        it('mutated', () => {

            mixin.value = 10;
            expect(mixin.value).toBe(10, 'mixin after set');
        });

        it('original', () => {

            expect(accessor.value).toBe(1, 'accessor');
            expect(mutator.value).toBe(10, 'mutator');

        });

    });
});



describe('chain (symbol, method), (property, accessor), mutator', () => {

    describe('accessor base', () => {

        let option : InspectOptions = {
            showHidden : true,
            getters : true,
            depth : 0
        };

        let data = ['a', 'b'];

        let symbol = new Symbol_(data);
        let method = new Method('method');
        let mixin1 = <Symbol_ & Mutable<Method>> Mixin (symbol, method);

        let property = new Property('property');
        let accessor = new Accessor(1);
        let mixin2 = <Mutable<Accessor> &  Symbol_ & Mutable<Method> & Property> Mixin (accessor, mixin1, property);

        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Symbol_ & Mutable<Method> & Property> Mixin (mixin2, mutator);

        it('default', () => {

            expect(mixin.value).toBe(2, 'mixin.value');
            expect(mixin.getData()).toBe('property', 'method.getData');
            expect(mixin.data).toBe('property', 'method.getData');

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i], `mixin[Symbol.iterator] ${i}`);
                i++;
            }
        });

        it('mutated', () => {

            mixin.setData('data');
            mixin.value = 10;
            let data2 = ['aa', 'bb', 'cc'];
            mixin.iterable = data2;

            expect(mixin.value).toBe(10, 'mixin.value');
            expect(mixin.getData()).toBe('data', 'mixin.getData');
            expect(mixin.data).toBe('data', 'mixin.data');

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }
        });

        it('original', () => {

            let k = 0;
            for (let val of symbol) {
                expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
                k++;
            }

            expect(accessor.value).toBe(10, 'method.getData');
            expect(property.data).toBe('property', 'property.data');
            expect(method.getData()).toBe('method', 'method.getData');

            expect(mutator.value).toBeUndefined();
        });

    });

    describe('plain object base', () => {

        let option : InspectOptions = {
            showHidden : true,
            getters : true,
            depth : 0
        };

        let data = ['a', 'b'];

        let symbol = new Symbol_(data);
        let method = new Method('method');
        let mixin1 = <Symbol_ & Mutable<Method>> Mixin (symbol, method);

        let property = new Property('property');
        let accessor = new Accessor(1);
        let mixin2 = <Mutable<Accessor> &  Symbol_ & Mutable<Method> & Property> Mixin ({}, accessor, mixin1, property);

        let mutator = new Mutator(2);
        let mixin = <Mutable<Accessor> & Mutator & Symbol_ & Mutable<Method> & Property> Mixin (mixin2, mutator);

        it('default', () => {

            expect(mixin.value).toBe(2, 'mixin.value');
            expect(mixin.getData()).toBe('property', 'method.getData');
            expect(mixin.data).toBe('property', 'method.getData');

            let i = 0;
            for (let val of mixin) {
                expect(val).toBe(data[i], `mixin[Symbol.iterator] ${i}`);
                i++;
            }
        });

        it('mutated', () => {

            mixin.setData('data');
            mixin.value = 10;
            let data2 = ['aa', 'bb', 'cc'];
            mixin.iterable = data2;

            expect(mixin.value).toBe(10, 'mixin.value');
            expect(mixin.getData()).toBe('data', 'mixin.getData');
            expect(mixin.data).toBe('data', 'mixin.data');

            let j = 0;
            for (let val of mixin) {
                expect(val).toBe(data2[j], `mixin[Symbol.iterator] ${j}`);
                j++;
            }
        });

        it('original', () => {

            let k = 0;
            for (let val of symbol) {
                expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
                k++;
            }

            expect(accessor.value).toBe(1, 'method.getData');
            expect(property.data).toBe('property', 'property.data');
            expect(method.getData()).toBe('method', 'method.getData');

            expect(mutator.value).toBeUndefined();
        });

    });
});
