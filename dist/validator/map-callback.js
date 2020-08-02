(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MapCallbackClass = void 0;
    const map_callback_1 = require("../validatable/map-callback");
    function MapCallback(validators, handler, validation, message) {
        return new MapCallbackClass(validators, handler, validation, message);
    }
    exports.default = MapCallback;
    class MapCallbackClass {
        constructor(validators, handler, validation, message) {
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
            this.message = message;
        }
        validate(argument) {
            return new map_callback_1.default(argument, this.validators, this.handler, this.validation, this.message);
        }
    }
    exports.MapCallbackClass = MapCallbackClass;
});
//# sourceMappingURL=map-callback.js.map