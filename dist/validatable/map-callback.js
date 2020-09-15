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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/value/set-getter", "../value/value/set-property", "../pick"], factory);
    }
})(function (require, exports) {
    "use strict";
    var _value;
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_getter_1 = require("../value/value/set-getter");
    const set_property_1 = require("../value/value/set-property");
    const pick_1 = require("../pick");
    class MapCallback {
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
            return set_property_1.default(this, 'validatable', this.validation(this.validatables));
        }
        get messages() {
            return this.validatables;
        }
        get validatables() {
            return set_property_1.default(this, 'validatables', this.map(__classPrivateFieldGet(this, _value), this.validators));
        }
        get value() {
            return set_property_1.default(this, 'value', pick_1.default(__classPrivateFieldGet(this, _value), ...Object.keys(this.validators)));
        }
        get message() {
            return set_getter_1.default(this, 'message', this.messageFactory(this.validatables));
        }
    }
    exports.default = MapCallback;
    _value = new WeakMap();
});
//# sourceMappingURL=map-callback.js.map