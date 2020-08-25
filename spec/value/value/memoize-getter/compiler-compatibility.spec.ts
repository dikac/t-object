import MemoizeGetter from "../../../../dist/value/value/memoize-getter";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    let object = {

        get data ()  {

            return MemoizeGetter(this, 'data', () =>'string');
        }
    }

    let string : string = object.data;

});

describe('different type', () => {

    let object = {

        get data () : number {

        // @ts-expect-error
            return MemoizeGetter(this, 'data', () =>'string');
        }
    }
    // @ts-expect-error
    let string : string = object.data;

});

describe('class', () => {

    interface Interface {
        readonly data : string;
    }

    describe('implement', () => {

        class Implementer implements Interface {

            get data ()  {

                return MemoizeGetter(this, 'data', () =>'string');
            }
        }

        let type : Interface = new Implementer();
        let string : string = type.data;

    });

    describe('class', () => {

        class Test  {

            get data ()  {

                return MemoizeGetter(this, 'data', () =>'string');
            }
        }

        let type : Interface = new Test();
        let string : string = type.data;

    });
});

describe('not exists', () => {

    describe('var', () => {

        let object = {

            get data ()  {

                // @ts-expect-error
                return MemoizeGetter(object, 'c', () =>'string');
            }
        }

        let string : string = object.data;

    });

    describe('this', () => {

        let object = {

            get data ()  {

                return MemoizeGetter(this, 'c', () =>'string');
            }
        }

        let string : string = object.data;

    });
});
