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
    const map_callback_1 = require("../validatable/map-callback");
    class MapCallback {
        constructor(validators, map, validation, message) {
            this.validators = validators;
            this.map = map;
            this.validation = validation;
            this.message = message;
        }
        validate(argument) {
            return new map_callback_1.default(argument, this.validators, this.map, this.validation, this.message);
        }
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map