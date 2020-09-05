import MemoizePropertyBind from "../../../../dist/value/value/memoize-property-bind";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    let source = {};

    let object = MemoizePropertyBind(source, 'data', () =>'string', true, true);

    let string : string = object.data;

    // @ts-expect-error
    let nonExist  = object.c;

});


describe('different type', () => {

    let source = {

        get data () : number { return  1}
    }

    let object = MemoizePropertyBind(source, 'data', () =>'string', true, true);

    // @ts-expect-error
    let number : number = object.data;

    let string : string = object.data;

});

describe('class', () => {

    interface Interface {
        readonly data : string;
    }

    describe('implement', () => {

        class Implementer implements Interface {

            get data ()  {

                return '';

            }
        }

        let source : Interface = new Implementer();
        let type : Interface = MemoizePropertyBind(source, 'data', () =>'string', true, true);
        let string : string = type.data;

    });

    describe('class', () => {

        class Test  {

            get data ()  {

                return ''
            }
        }

        let source : Interface = new Test();
        let type : Interface = MemoizePropertyBind(source, 'data', () =>'string', true, true);
        let string : string = type.data;

    });
});

describe('not exists', () => {

    describe('var', () => {

        let source = {}


        let object = MemoizePropertyBind(source, 'data', () =>'string', true, true);

        // @ts-expect-error
        let string : string = object.c;

    });

    describe('multi', () => {

        let source = {

            get data ()  {
                return '';
            }
        }


        let object = MemoizePropertyBind(source, 'value', () =>'string', true, true);

        // @ts-expect-error
        let string : string = object.c;

    });
});
