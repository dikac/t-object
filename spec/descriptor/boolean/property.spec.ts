import Property from "../../../dist/descriptor/boolean/property";
import GetProperty from "../../../dist/descriptor/from-object";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe(`plain`, () => {

    it(`property`, () => {

        let object = {property:1};
        let descriptor = GetProperty(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exits')
        }
    });

    it(`getter`, () => {

        let object = {
            get property  () {return 1}
        };

        let descriptor = GetProperty(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(false);

        } else {

            fail('descriptor should exits')
        }
    });

    it(`setter`, () => {

        let object = {
            set property  (data) {}
        };

        let descriptor = GetProperty(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(false);

        } else {

            fail('descriptor should exits')
        }
    });
});


describe(`class`, () => {

    it(`property`, () => {

        class Test {
            property = 1
        }

        let object = new Test;
        let descriptor = GetProperty(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exits')
        }
    });

    it(`getter`, () => {

        class Test {
            get property  () {return 1}
        }

        let object = new Test;

        let descriptor = GetProperty(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(false);

        } else {

            fail('descriptor should exits')
        }
    });

    it(`setter`, () => {

        class Test {
            set property  (data) {}
        }

        let object = new Test;

        let descriptor = GetProperty(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(false);

        } else {

            fail('descriptor should exits')
        }
    });
});

describe(`array`, () => {

    it(`property`, () => {

        let descriptor = GetProperty([], 'length');

        if(descriptor) {

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exits')
        }
    });
});

