import Map from "../../dist/record/map-callback";


it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('single', () => {

    class Data {

        constructor(
            public data : string
        ) {}

    }

    let data = {
        property1 : new Data('a'),
        property2 : new Data('b'),
    };

    describe('implicit', function () {

        let result = Map<string, Data, string, typeof data>(data,  (v:any) : v is Data => 'data' in v, (v:Data)=>v.data);

        it(`check value`, () => {

            expect(result.property1).toBe('a', 'property1');
            expect(result.property2).toBe('b', 'property2');
        });
    });

    describe('explicit', function () {

        let result = Map(data,  (v:any) : v is Data => 'data' in v, (v:Data)=>v.data);

        it(`check value`, () => {
            expect(result.property1).toBe('a', 'property1');
            expect(result.property2).toBe('b', 'property2');
        });
    });

});

describe('multi', () => {

    class Data {

        constructor(
            public data : string
        ) {}

    }

    let data = {
        property1 : new Data('a'),
        property2 : new Data('b'),
        property3 : {
            property1 : new Data('c'),
            property2 : new Data('d'),
        },
        property4 : {
            property1 : new Data('e'),
            property2 : new Data('f'),
            property3 : {
                property1 : new Data('g'),
                property2 : new Data('h'),
            }
        }
    };

    describe('implicit', function () {

        let result = Map<string, Data, string, typeof data>(data,  (v:any) : v is Data => 'data' in v, (v:Data)=>v.data);

        it(`check value`, () => {

            expect(result.property1).toBe('a', 'property1');
            expect(result.property2).toBe('b', 'property2');
            expect(result.property3.property1).toBe('c', 'property3.property1');
            expect(result.property3.property2).toBe('d', 'property3.property2');
            expect(result.property4.property1).toBe('e', 'property3.property2');
            expect(result.property4.property2).toBe('f', 'property3.property2');
            expect(result.property4.property3.property1).toBe('g', 'property4.property3.property1');
            expect(result.property4.property3.property2).toBe('h', 'property4.property3.property2');
        });
    });

    describe('explicit', function () {

        let result = Map(data,  (v:any) : v is Data => 'data' in v, (v:Data)=>v.data);

        it(`check value`, () => {

            expect(result.property1).toBe('a', 'property1');
            expect(result.property2).toBe('b', 'property2');
            expect(result.property3.property1).toBe('c', 'property3.property1');
            expect(result.property3.property2).toBe('d', 'property3.property2');
            expect(result.property4.property1).toBe('e', 'property3.property2');
            expect(result.property4.property2).toBe('f', 'property3.property2');
            expect(result.property4.property3.property1).toBe('g', 'property4.property3.property1');
            expect(result.property4.property3.property2).toBe('h', 'property4.property3.property2');
        });
    });

});
