(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/record/map-partial", "./map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_partial_1 = require("./validatable/record/map-partial");
    const map_callback_1 = require("./map-callback");
    function MapPartial(validators, validation, message) {
        return new map_callback_1.default(validators, (value, validators) => map_partial_1.default(value, validators), validation, message);
    }
    exports.default = MapPartial;
});
//# sourceMappingURL=map-partial.js.map