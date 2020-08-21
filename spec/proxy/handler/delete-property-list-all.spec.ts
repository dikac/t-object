import DeletePropertyHandler from "../../../dist/proxy/handler/delete-property-list-all";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('direct set', () => {

    it('delete', ()=>{

        class Class  {
            data : string = 'class'
        }

        let object = {
            data : 'plain'
        };

        let class_ = new Class;

        let original = {
            data : 'original'
        };

        let getter = new DeletePropertyHandler([object, class_]);
        let proxy = new Proxy<{data:string}>(original, getter)

        expect(class_.data).toBe('class');
        expect(original.data).toBe('original');
        expect(object.data).toBe('plain');

        expect(delete proxy.data).toBe(true);

        expect<any>(class_.data).toBe(undefined);
        expect<any>(original.data).toBe(undefined);
        expect<any>(object.data).toBe(undefined);
    });
});

describe('bind', () => {

    it('delete', ()=>{

        class Class  {
            data : string = 'class'
        }

        let object = {
            data : 'plain'
        };

        let class_ = new Class;

        let original = {
            data : 'original'
        };

        let getter = new DeletePropertyHandler([object, class_]);
        let proxy = new Proxy(original, getter.bindTo({}))

        expect(class_.data).toBe('class');
        expect(original.data).toBe('original');
        expect(object.data).toBe('plain');

        expect(delete proxy.data).toBe(true);

        expect<any>(class_.data).toBe(undefined);
        expect<any>(original.data).toBe(undefined);
        expect<any>(object.data).toBe(undefined);
    });
});
