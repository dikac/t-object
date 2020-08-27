import MapCallback from "../../dist/map-callback";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('basic', () => {

    let source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    let map = MapCallback(source, (value)=>'replaced');

    expect(map.number).toBe('replaced');
    expect(map.string).toBe('replaced');
    expect(map.boolean).toBe('replaced');
    expect(map.object).toBe('replaced');

});
