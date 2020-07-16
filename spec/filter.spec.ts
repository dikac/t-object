import Filter from "../dist/filter";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('unfiltered', () => {

    let source  = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    };

    let filtered = Filter(source, ()=>true);

    it('compare source & original', () => {

        expect(filtered).not.toBe(source);

    });

    it('check source', () => {

        expect(source.data1).toBe(1);
        expect(source.data2).toBe(2);
        expect(source.data3).toBe(3);
        expect(source.data4).toBe(4);
    });

    it('check filtered', () => {

        expect(filtered.data1).toBe(1);
        expect(filtered.data2).toBe(2);
        expect(filtered.data3).toBe(3);
        expect(filtered.data4).toBe(4);
    });

});


describe('filtered', () => {

    let source  = {
        data1 : 1,
        data2 : '2',
        data3 : '3',
        data4 : 4,
    };

    let filtered = Filter(source, (value : any)=>typeof value === "string");
   
    it('compare source & original', () => {

        expect(filtered).not.toBe(source);

    });

    it('check source', () => {

        expect(source.data1).toBe(1);
        expect(source.data2).toBe('2');
        expect(source.data3).toBe('3');
        expect(source.data4).toBe(4);
    });

    it('check filtered', () => {

        expect(filtered.data1).toBe(undefined);
        expect(filtered.data2).toBe('2');
        expect(filtered.data3).toBe('3');
        expect(filtered.data4).toBe(undefined);
    });

});
