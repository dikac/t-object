import AssignUndefined from "../dist/assign-undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('destination undefined', () => {

    let target = {

    };

    let source = {
        data1 : 1,
        data2 : 2,
        data3 : 'a',
        data4 : 'b',
    };

    let result = AssignUndefined(target, source);

    it(`check object`, () => {

        expect(result).toEqual(<typeof source>target);
    });

    it(`check value`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe('a');
        expect(result.data4).toBe('b');
    });

    it(`check type`, () => {

        result.data1 = 1; // Compiler Pass
        result.data2 = 2; // Compiler Pass
        result.data3 = 'a'; // Compiler Pass
        result.data4 = 'b'; // Compiler Pass
    });

});


describe('source undefined', () => {

    let target  = {
        data1 : 1,
        data2 : 2,
        data3 : 'a',
        data4 : 'b',
    };

    let source  = {

    };

    let result = AssignUndefined(target, source);

    it(`check object`, () => {

        expect(result).toEqual(target);
    });

    it(`check value`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe('a');
        expect(result.data4).toBe('b');
    });

    it(`check type`, () => {

        result.data1 = 1; // Compiler Pass
        result.data2 = 2; // Compiler Pass
        result.data3 = 'a'; // Compiler Pass
        result.data4 = 'b'; // Compiler Pass
    });

});


describe('both set', () => {

    let target = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    };

    let source = {
        data1 : 'a',
        data2 : 'b',
        data3 : 'c',
        data4 : 'd',
    };

    let result = AssignUndefined(target, source);

    it(`check object`, () => {

        expect(result).toEqual(target);
    });

    it(`check property`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe(3);
        expect(result.data4).toBe(4);
    });


    it(`check type`, () => {

        result.data1 = 1; // Compiler Pass
        result.data2 = 2; // Compiler Pass
        result.data3 = 3; // Compiler Pass
        result.data4 = 4; // Compiler Pass
    });

});


describe('target mixed', () => {

    let target  = {
        data1 : undefined,
        data2 : 20,
        data3 : 'aa',
        data4 : undefined,
    };

    let source = {
        data1 : 1,
        data2 : 2,
        data3 : 'a',
        data4 : 'b',
    };

    let result = AssignUndefined(target, source);

    it(`check object`, () => {

        // @ts-ignore
        expect(result).toEqual(target);
    });

    it(`check property`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(20);
        expect(result.data3).toBe('aa');
        expect(result.data4).toBe('b');
    });

    it(`check type`, () => {

        result.data1 = 11; // Compiler Pass
        result.data2 = 22; // Compiler Pass
        result.data3 = 'bb'; // Compiler Pass
        result.data4 = 'cc'; // Compiler Pass
    });

});


describe('target & source mixed', () => {

    let target = {
        data1 : undefined,
        data2 : 2,
        data3 : 'a',
        data4 : undefined,
        data5 : undefined,
    };

    let source  = {
        data1 : 1,
        data2 : 3,
        data3 : undefined,
        data4 : undefined,
        data5 : 'c',
    };

    let result = AssignUndefined(target, source);

    it(`check object`, () => {

        // @ts-ignore
        expect(result).toEqual(target);
    });

    it(`check property`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe('a');
        expect(result.data4).toBe(undefined);
    });

    it(`check type`, () => {

        result.data1 = 11; // Compiler Pass
        result.data2 = 22; // Compiler Pass
        result.data3 = 'aa'; // Compiler Pass
        result.data4 = undefined; // Compiler Pass
    });

});


describe('both undefined', () => {

    let target  = {

    };

    let source  = {
        data1 : undefined,
        data2 : undefined,
        data3 : undefined,
        data4 : undefined,
    };

    let result = AssignUndefined(target, source);

    it(`check object`, () => {

        // @ts-ignore
        expect(result).toEqual(target);
    });

    it(`check property`, () => {

        expect(result.data1).toBe(undefined);
        expect(result.data2).toBe(undefined);
        expect(result.data3).toBe(undefined);
        expect(result.data4).toBe(undefined);
    });

    it(`check type`, () => {

        result.data1 = undefined; // Compiler Pass
        result.data2 = undefined; // Compiler Pass
        result.data3 = undefined; // Compiler Pass
        result.data4 = undefined; // Compiler Pass
    });


});
