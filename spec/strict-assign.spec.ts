import StrictAssign from "../dist/strict-assign";
it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

interface Data {
    data1 ?: string;
    data2 ?: number;
    data3 ?: boolean;
}

describe('test', function () {

    let target : Data = {
        data1 : 'string'
    }

    let source : Data = {
        data2 : 1,
        data3 : false,
    }


    it('check result', () => {

        let result = StrictAssign(target, source);
        expect(result.data1).toBe('string');
        expect(result.data2).toBe(1);
        expect(result.data3).toBe(false);

    })

})
