(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../record/map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_callback_1 = require("../../record/map-callback");
    // TODO RENAME TO MORE APPROPRIATE
    function Map(object, callback) {
        return map_callback_1.default(object, callback);
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map