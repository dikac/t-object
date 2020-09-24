var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var _message;
import MemoizeAccessor from "../function/memoize-accessor";
export default class ValueCallback {
    constructor(value, validators, map, validation, message) {
        this.value = value;
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        _message.set(this, void 0);
        __classPrivateFieldSet(this, _message, message);
    }
    get valid() {
        return this.validatable.valid;
    }
    get validatable() {
        return this.validation(this.validatables);
    }
    get messages() {
        return this.validatables;
    }
    get validatables() {
        return this.map(this.value, this.validators);
    }
    get message() {
        return __classPrivateFieldGet(this, _message).call(this, this.validatables);
    }
}
_message = new WeakMap();
__decorate([
    MemoizeAccessor(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ValueCallback.prototype, "validatable", null);
__decorate([
    MemoizeAccessor(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ValueCallback.prototype, "validatables", null);
__decorate([
    MemoizeAccessor(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ValueCallback.prototype, "message", null);
//# sourceMappingURL=value-callback.js.map