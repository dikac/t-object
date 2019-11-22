(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function FromJson(json, validator, error = (json, object) => new TypeError('json string is not valid according to validator')) {
        let string = json.toString();
        let object = JSON.parse(string);
        if (validator(object)) {
            return object;
        }
        throw error(string, object);
    }
    exports.default = FromJson;
});
//# sourceMappingURL=from-json.js.map