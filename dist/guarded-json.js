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
    /**
     * Parse json string to object and check for certain type according to {@param validator}
     * @param json
     * @param validator
     * @param error
     * @param preprocess
     * @constructor
     */
    function GuardedJson(json, validator, error = (json, object) => new TypeError('json string is not valid according to validator'), preprocess = () => { }) {
        let string = json.toString();
        let object = JSON.parse(string);
        preprocess(object);
        if (validator(object)) {
            return object;
        }
        throw error(string, object);
    }
    exports.default = GuardedJson;
});
//# sourceMappingURL=guarded-json.js.map