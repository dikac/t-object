"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("../../dist/boolean/structure");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe('structure', () => {
    let validator = {
        number: (n) => typeof n === "number",
        string: (n) => typeof n === "string",
        object: (n) => typeof n === "object",
    };
    let object = {
        number: 1,
        string: 'string',
        object: {},
    };
    it(`valid`, () => {
        expect(structure_1.default(object, validator)).toBe(true);
    });
    it(`invalid`, () => {
        expect(structure_1.default([], validator)).toBe(false);
    });
});
//# sourceMappingURL=structure.spec.js.map