import Type from "../../../dist/recursive/boolean/recursive";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe("single dimension", function() {

    let data = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    }

    it("check valid", () => {

        let result = Type(data, (value : any) : value is number => typeof value === "number");

        expect(result).toBe(true);

    });


    it("check invalid", () => {

        let result = Type(data, (value : any) : value is number => typeof value === "string");

        expect(result).toBe(false);

    });

    it("check mixed invalid", () => {

        let result = Type(data, (value : any) : value is number => value < 3);

        expect(result).toBe(false);

    });
})

