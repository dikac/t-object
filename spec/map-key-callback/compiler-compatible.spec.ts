import MapKeyCallback from "../../dist/map-key-callback";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('basic', () => {

    let source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    let map = MapKeyCallback(source, (value)=>'replaced' + 'value');

    let string : string;

    //@ts-expect-error
    string = map.replacednumber;

    //@ts-expect-error
    string = map.replacedstring;

    //@ts-expect-error
    string = map.replacedboolean;

    //@ts-expect-error
    string = map.replacedobject;

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

    let map = MapKeyCallback(source, (value, key)=>{

        if(key === 'object') {

            // @ts-ignore
            let object : object = value;
        }

        return 'replaced'
    });


});
