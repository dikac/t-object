"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mixin_1 = require("../dist/mixin");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
class Accessor {
    constructor(_value = 0) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
}
class Mutator {
    constructor(_value = 0) {
        this._value = _value;
    }
    set value(value) {
        this._value = value;
    }
}
class Method {
    constructor(data = '') {
        this.data = data;
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
class Symbol_ {
    constructor(iterable) {
        this.iterable = iterable;
    }
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
}
class Property {
    constructor(data = 'data') {
        this.data = data;
    }
}
describe('accessor', () => {
    let accessor = new Accessor(10);
    let mixin = mixin_1.default(accessor);
    it('default', () => {
        expect(mixin.value).toBe(10);
    });
});
describe('single', () => {
    let accessor = new Mutator(10);
    let mixin = mixin_1.default(accessor);
    it('default', () => {
        expect(mixin.value).toBeUndefined();
    });
});
describe('data', () => {
    let method = new Method('a');
    let mixin = mixin_1.default(method);
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
describe('symbol', () => {
    let data = ['a', 'b'];
    let symbol = new Symbol_(data);
    let mixin = mixin_1.default(symbol);
    it('default', () => {
        let i = 0;
        for (let val of mixin) {
            expect(val).toBe(data[i]);
            i++;
        }
    });
    it('mutated', () => {
        let data2 = ['aa', 'bb', 'cc'];
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
describe('property', () => {
    let property = new Property('string');
    let mixin = mixin_1.default(property);
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
describe('accessor & mutator', () => {
    let accessor = new Accessor(1);
    let mutator = new Mutator(2);
    let mixin = mixin_1.default(accessor, mutator);
    it('default', () => {
        expect(mixin.value).toBe(2, 'mixin');
    });
    it('mutated', () => {
        mixin.value = 10;
        expect(mixin.value).toBe(10, 'mixin after set');
    });
    it('original', () => {
        expect(accessor.value).toBe(1, 'accessor');
        expect(mutator.value).toBeUndefined();
    });
});
describe('method, accessor & mutator', () => {
    let method = new Method('str');
    let accessor = new Accessor(1);
    let mutator = new Mutator(2);
    let mixin = mixin_1.default(accessor, mutator, method);
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
describe('symbol, accessor & mutator', () => {
    let data = ['a', 'b'];
    let method = new Symbol_(data);
    let accessor = new Accessor(1);
    let mutator = new Mutator(2);
    let mixin = mixin_1.default(accessor, mutator, method);
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
        for (let val of method) {
            expect(val).toBe(data[k], `mixin[Symbol.iterator] ${k}`);
            k++;
        }
        expect(accessor.value).toBe(1, 'method.getData');
        expect(mutator.value).toBeUndefined();
    });
});
describe('symbol, method, property, accessor & mutator', () => {
    let data = ['a', 'b'];
    let symbol = new Symbol_(data);
    let method = new Method('method');
    let property = new Property('property');
    let accessor = new Accessor(1);
    let mutator = new Mutator(2);
    let mixin = mixin_1.default(accessor, mutator, symbol, method, property);
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
describe('chain (symbol, method), (property, accessor), mutator', () => {
    let option = {
        showHidden: true,
        getters: true,
        depth: 0
    };
    let data = ['a', 'b'];
    let symbol = new Symbol_(data);
    let method = new Method('method');
    let mixin1 = mixin_1.default(symbol, method);
    let property = new Property('property');
    let accessor = new Accessor(1);
    let mixin2 = mixin_1.default(accessor, mixin1, property);
    let mutator = new Mutator(2);
    let mixin = mixin_1.default(mixin2, mutator);
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
//# sourceMappingURL=mixin.spec.js.map