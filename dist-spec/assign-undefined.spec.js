"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_undefined_1 = require("../dist/assign-undefined");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe('structure', () => {
    it(`valid not set`, () => {
        let target = {
            data1: 1,
            data2: 1,
        };
        let source = {
            data1: 2,
            data2: 2,
            data3: 2,
            data4: 2,
        };
        let result = assign_undefined_1.default(target, source);
        expect(result).toEqual(target);
        expect(result.data1).toBe(1);
        expect(result.data2).toBe(1);
        expect(result.data3).toBe(2);
        expect(result.data4).toBe(2);
    });
    it(`valid set as undefined`, () => {
        let target = {
            data1: 1,
            data2: undefined,
            data3: undefined,
            data4: 1,
        };
        let source = {
            data1: 2,
            data2: 2,
            data3: 2,
            data4: 2,
        };
        let result = assign_undefined_1.default(target, source);
        expect(result).toEqual(target);
        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe(2);
        expect(result.data4).toBe(1);
    });
});
//# sourceMappingURL=assign-undefined.spec.js.map