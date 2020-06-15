(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../filter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const filter_1 = require("../filter");
    /**
     * Add {@link Record} type to {@link ObjectFilter}
     */
    function Filter(record, filter) {
        return filter_1.default(record, filter);
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map