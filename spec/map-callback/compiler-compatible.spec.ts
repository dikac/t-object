import MapCallback from "../../dist/map-callback";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('basic', () => {

    let source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    let map = MapCallback(source, (value)=>'replaced');

    let string : string;
    string = map.number;
    string = map.string;
    string = map.boolean;
    string = map.object;

    //@ts-expect-error
    string = map.r;

});


describe('callback parameter', () => {

    let source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    let map = MapCallback(source, (value, key)=>{

        if(key === 'object') {

            // @ts-ignore
            let object : object = value;
        }

        return 'replaced'
    });


});
