import SetProperty from "../../../../dist/value/value/set-property";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    let object = {

        get data ()  {

            return SetProperty(this, 'data', 'string');
        }
    }

    let string : string = object.data;

});

describe('different type', () => {

    let object = {

        get data () : number {

        // @ts-expect-error
            return SetProperty(this, 'data', 'string');
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

                return SetProperty(this, 'data', 'string');
            }
        }

        let type : Interface = new Implementer();
        let string : string = type.data;

    });

    describe('class', () => {

        class Test  {

            get data ()  {

                return SetProperty(this, 'data', 'string');
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
                return SetProperty(object, 'c', 'string');
            }
        }

        let string : string = object.data;

    });

    describe('this', () => {

        let object = {

            get data ()  {

                return SetProperty(this, 'c', 'string');
            }
        }

        let string : string = object.data;

    });
});
