(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./handler/merge-anonymous"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const merge_anonymous_1 = require("./handler/merge-anonymous");
    function List(object, factories) {
        let handlers = [];
        for (let factory of factories) {
            handlers.push(factory(object));
        }
        let handler = merge_anonymous_1.default(...handlers);
        return new Proxy({}, handler);
    }
    exports.default = List;
});
//# sourceMappingURL=list.js.map