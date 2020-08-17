import GetterHandler from "../../../dist/proxy/handler/getter-list";
import Shuffle from "@dikac/t-array/shuffle";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

type Type<Value = any> = {data:Value};

const plain = {
    get data() {return 'plain'}
}


class Getter  {
    get data() {return 'getter'}
}

class Setter  {
    set data(value) {}
}

class Property {

    constructor(
        public data : string = 'property'
    ) {

    }

}

class Method {

    data() : string {

        return 'method';
    }
}

describe('direct set', () => {

    let property1 = new Property('property 1');
    let property2 = new Property('property 2');

    let getter = new GetterHandler<Type<string>>([property1, property2]);
    let proxy = new Proxy<Type<string>>(<Type<string>>{}, getter)

    it('check value', ()=>{

        expect(proxy.data).toBe('property 1');
        expect(getter.handler['data']).toBe(property1);
    });

});

describe('bind set', () => {

    let handler = {};
    let property1 = new Property('property 1');
    let property2 = new Property('property 2');

    let getter = new GetterHandler<Type<string>>([property1, property2]);
    getter.bind(handler);

    let proxy = new Proxy<Type<string>>(<Type<string>>{}, handler)

    for(let i = 0; i < 5; i++) {

        it('check & recheck value', () => {

            expect(proxy.data).toBe('property 1');
            expect(getter.handler['data']).toBe(property1);
        });
    }

});


for(let i = 0; i < 5; i++) {

    describe('order', () => {

        let list = [
            plain,
            new Property,
            new Getter
        ];

        Shuffle(list);

        let getter = new GetterHandler<Type<string>>(list);
        let proxy = new Proxy<Type<string>>(<Type<string>>{}, getter);

        // retest
        for(let i = 0; i < 5; i++) {

            it('compare data', ()=> {

                expect(proxy.data).toBe(list[0].data);
            });

            it('compare instance', ()=> {

                if(getter.handler['data'] === plain) {

                    expect(proxy.data).toBe('plain')

                } else if(getter.handler['data'] instanceof Property) {

                    expect(proxy.data).toBe('property')

                } else if(getter.handler['data'] instanceof Getter) {

                    expect(proxy.data).toBe('getter')

                } else {

                    fail('container list is not assigned ho handler')
                }
            });

        }
    });
}
