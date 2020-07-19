import Property from "../../../dist/message/recursive/property";
import Prepend from "../../../dist/message/prepend-properties";
import Message from "@dikac/t-message/message";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let message =  {
    data1 : {message : 1},
    data2 : {message : 2},
    data3 : {
        data1 : {message : 3},
        data2 : {message : 4},
    }
}

let result = Property<Message<string>, Message<number>,  typeof  message>(message, Prepend)

describe("compiler compatible", function() {

    describe("valid type", function() {

        let string : string;
        string = result.data1.message;
        string = result.data2.message;
        string = result.data3.data1.message;
        string = result.data3.data2.message;
    })

    describe("invalid type", function() {

        let number : number;
        // @ts-expect-error
        number = result.data1.message;
        // @ts-expect-error
        number = result.data2.message;
        // @ts-expect-error
        number = result.data3.data1.message;
        // @ts-expect-error
        number = result.data3.data2.message;
    })


    it('invalid property', function () {

        let string : string;

        // @ts-expect-error
        string = result.data3.message;

        try {
            // @ts-expect-error
            string = result.data4.data1.message;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });

});

it("check data", function() {

    expect(result.data1.message).toBe('data1 : 1');
    expect(result.data2.message).toBe('data2 : 2');
    expect(result.data3.data1.message).toBe('data3.data1 : 3');
    expect(result.data3.data2.message).toBe('data3.data2 : 4');
})
