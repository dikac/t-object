import Record from "../../dist/recursive/recursive";
import Convert from "../../dist/recursive/map";

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


    let type : Convert<boolean, string, string, typeof single> = {

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

    let type : Convert<boolean, string, string, typeof single> =  {

        str : true, // Compile Pass
        num : true, // Compile Pass
        child : {
            str : true,// Compile Pass
            num : true, // Compile Pass
            child : {
                str : true,// Compile Pass
                num : true, // Compile Pass
            }
        }
    }


});
