var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _value;
import SetGetter from "../value/value/set-getter";
import SetProperty from "../value/value/set-property";
import Pick from "../pick";
export default class MapCallback {
    constructor(value, validators, map, validation, message) {
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        _value.set(this, void 0);
        __classPrivateFieldSet(this, _value, value);
        this.messageFactory = message;
    }
    get valid() {
        return this.validatable.valid;
    }
    get validatable() {
        return SetProperty(this, 'validatable', this.validation(this.validatables));
    }
    get messages() {
        return this.validatables;
    }
    get validatables() {
        return SetProperty(this, 'validatables', this.map(__classPrivateFieldGet(this, _value), this.validators));
    }
    get value() {
        return SetProperty(this, 'value', Pick(__classPrivateFieldGet(this, _value), ...Object.keys(this.validators)));
    }
    get message() {
        return SetGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
_value = new WeakMap();
//# sourceMappingURL=map-callback.js.map