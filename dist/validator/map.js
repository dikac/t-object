(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./return/record/map", "./map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("./return/record/map");
    const map_callback_1 = require("./map-callback");
    // type ReturnInfer<Schema extends Record<any, Validator>> = {
    //     [Key in keyof Schema]  : InferReturn<Schema[Key]>
    // };
    function Map(validators, validation, message) {
        return new map_callback_1.default(validators, map_1.default, validation, message);
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map