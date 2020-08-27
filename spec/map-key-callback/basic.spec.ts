import MapKeyCallback from "../../dist/map-key-callback";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('basic', () => {

    let source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    let map = MapKeyCallback(source, (key)=>'replaced'+key);

    expect(map.replacednumber).toBe(1);
    expect(map.replacedstring).toBe('string');
    expect(map.replacedboolean).toBe(true);
    expect(map.replacedobject).toEqual({});

});

it('symbol', () => {

    let source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    let map = MapKeyCallback(source, (key)=>'replaced.'+key);

    expect(map['replaced.number']).toBe(1);
    expect(map['replaced.string']).toBe('string');
    expect(map['replaced.boolean']).toBe(true);
    expect(map['replaced.object']).toEqual({});

});
