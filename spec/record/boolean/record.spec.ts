import Type from "../../../dist/record/boolean/record";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});



describe('valid', function () {


    let data = {
        property1 : 'a',
        property2 : 'b',
        property3 : 'c',
        property4 : 'd',
    };

    let convert : object = data;


    it(`check value`, () => {

        if(Type<string, string>(convert,  (v:any) : v is string  => typeof v === 'string')) {

            expect(convert.property1).toBe('a', 'property1');
            expect(convert.property2).toBe('b', 'property2');
            expect(convert.property3).toBe('c', 'property3');
            expect(convert.property4).toBe('d', 'property4');

            convert.property5 = 'e'; // compiler pass
        }
    });


});
