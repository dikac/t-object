import FilterRecursive from "../dist/filter-recursive";
import NotEmpty from "@dikac/t-string/boolean/not-empty";
import String from "@dikac/t-string/boolean/string";
import NotEmptyObject from "../dist/boolean/not-empty";
import Object from "../dist/boolean/object";


it("enable console log", () => { spyOn(console, 'log').and.callThrough()});


describe('single dimension', () => {

    let object = {
        retain : 'a',
        remove : '',
        mixed : {
            retain : 'a',
            remove : '',
        },
        retains : {
            retain1 : 'a',
            retain2 : 'b',
        },
        removes : {
            retain1 : '',
            retain2 : '',
        },
    }

    it('filter not empty string', ()=>{

        const filtered = FilterRecursive(object, NotEmpty);

        expect<any>(filtered).toEqual({
            retain : 'a',
            mixed : {
                retain : 'a',
            },
            retains : {
                retain1 : 'a',
                retain2 : 'b',
            },
            removes : {},
        })

    })

    it('filter not empty string & object', ()=>{

        const filtered = FilterRecursive(object, (v)=>(String(v) && NotEmpty(v)) && (Object(v) && NotEmptyObject(v)));

        expect<any>(filtered).toEqual({
            retain : 'a',
            mixed : {
                retain : 'a',
            },
            retains : {
                retain1 : 'a',
                retain2 : 'b',
            },
        })

    })



})
