(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/map-callback", "../../validator/validatable/record/standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_callback_1 = require("../validatable/map-callback");
    const standard_1 = require("../../validator/validatable/record/standard");
    class MapAll {
        constructor(validators, validation) {
            this.validators = validators;
            this.validation = validation;
        }
        validate(argument) {
            let handler = (value, validators) => standard_1.default(value, validators, false);
            return new map_callback_1.default(argument, this.validators, handler, this.validation);
        }
    }
    exports.default = MapAll;
});
//# sourceMappingURL=map-all.js.map