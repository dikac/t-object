import Standard from "../../../../dist/message/return/record/map";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('flat', ()=>{


    let data = {
        data1 : {message:1},
        data2 : {message:2},
        data3 : {message:3},
        data4 : {message:4},
        data5 : {message:5},
    };

    let result = Standard(data);

    describe('compiler compatibility', () => {


        let number : number;

        number = result.data1;
        number = result.data2;
        number = result.data3;
        number = result.data4;
        number = result.data5;

        // @ts-expect-error
        number = result.data6;

        // @ts-expect-error
        let string : string = result.data6;
    });


    it('check value', () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe(3);
        expect(result.data4).toBe(4);
        expect(result.data5).toBe(5);

    });

});


describe('deep', ()=>{


    let data = {
        data1 : {message:1},
        data2 : {message:2},
        data3 : {
            message : {
                data1 : {message:3},
                data2 : {message:4},
            },
        }
    };

    let result = Standard(data);

    describe('compiler compatibility', () => {


        let number : number;

        number = result.data1;
        number = result.data2;
        number = result.data3.data1.message;
        number = result.data3.data2.message;

        // @ts-expect-error
        number = result.data6;

        // @ts-expect-error
        let string : string = result.data6;
    });


    it('check value', () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3.data1).toEqual({message:3});
        expect(result.data3.data2).toEqual({message:4});

    });

});
