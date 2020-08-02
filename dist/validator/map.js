(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/map-callback", "./return/record/standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MapClass = void 0;
    const map_callback_1 = require("../validatable/map-callback");
    const standard_1 = require("./return/record/standard");
    function Map(validators, validation, message) {
        return new MapClass(validators, validation, message);
    }
    exports.default = Map;
    class MapClass {
        constructor(validators, validation, message) {
            this.validators = validators;
            this.validation = validation;
            this.message = message;
        }
        validate(argument) {
            let handler = (value, validators) => standard_1.default(value, validators, true);
            return new map_callback_1.default(argument, this.validators, handler, this.validation, this.message);
        }
    }
    exports.MapClass = MapClass;
});
//# sourceMappingURL=map.js.map