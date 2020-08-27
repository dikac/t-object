import Map from "../dist/map-callback";
import Convert from "../dist/map";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

interface Single {
    str : string;
    num : number;
}

interface Multi extends Single {
    str : string;
    num : number;
    child ?: Multi;
}

describe('single dimension', () => {

    let single : Record<string, string> = {
        str : 'string',
        num : 'string',
    }

    let type : Convert<typeof single, boolean> = {

        str : true, // Compile Pass
        num : true, // Compile Pass
    }
})

describe('multi dimension', () => {

    let single  = {
        str : 'string',
        num : 'string',
        child : {
            str : 'string',
            num : 'string',
            child : {
                str : 'string',
                num : 'string',
            }
        }
    }

    let type : Convert<typeof single, boolean> =  {

        str : true,
        num : true,
        child : true,
    }


    let invalid : Convert<typeof single, boolean> =  {
        str : true,
        num : true,
        // @ts-expect-error
        child : {
            str : true,
            num : true,
            child : {
                str : true,
                num : true,
            }
        }
    }
});


describe('complex', () => {

    interface Data {

        string : string;
        number : number;
    }

    let convert : Convert<Data, boolean> = {
        string : true,
        number : false,
    }

});


let data = {
    property1 : 1,
    property2 : 'string',
    property3 : true,
};

describe('implicit', function () {

    let result = Map<typeof data, string>(data,  (v:any) => 'data');

    it(`check value`, () => {

        expect(result.property1).toBe('data', 'property1');
        expect(result.property2).toBe('data', 'property2');
        expect(result.property3).toBe('data', 'property3');
    });
});

describe('explicit', function () {

    let result = Map(data,  (v:any) => 'data');

    it(`check value`, () => {
        expect(result.property1).toBe('data', 'property1');
        expect(result.property2).toBe('data', 'property2');
        expect(result.property3).toBe('data', 'property3');
    });
});

