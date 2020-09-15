(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../validatable/record/valid", "./map", "../../../omit-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const valid_1 = require("../../../validatable/record/valid");
    const map_1 = require("./map");
    const omit_undefined_1 = require("../../../omit-undefined");
    function Valid(record) {
        return map_1.default(omit_undefined_1.default(valid_1.default(record)));
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map