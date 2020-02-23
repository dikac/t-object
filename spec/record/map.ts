import Map from "../../dist/record/map";



it("force console log", () => { spyOn(console, 'log').and.callThrough()});

describe('test', () => {

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
        }
    };


    let result = Map<Data, string, typeof data>(data,  (v:any) : v is Data => v in v, (v:Data)=>v.data);

    it(`property valid`, () => {

        expect(result.property1).toBe('a', 'property1');
        expect(result.property2).toBe('b', 'property2');
        expect(result.property3.property1).toBe('c', 'property3.property1');
        expect(result.property3.property2).toBe('d', 'property3.property2');
    });


});
