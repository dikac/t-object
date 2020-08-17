import Readable from "../../../dist/property/boolean/readable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('plain', () => {

    it('property', () => {

        let object = {property:true}

        expect(Readable(object, 'property')).toBe(true);
        expect(Readable(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        let object = {
            set setter (value) {},
        }

        expect(Readable(object, 'setter')).toBe(false);
        expect(Readable(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        let object = {
            get getter () { return 1 },
        }

        expect(Readable(object, 'getter')).toBe(true);
        expect(Readable(object, 'notExists')).toBe(false);

    });
});


describe('class', () => {

    it('property', () => {

        class Test {
            property = true
        }
        let object = new Test;

        expect(Readable(object, 'property')).toBe(true);
        expect(Readable(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Test {
            set setter (value) {}
        }

        let object = new Test;

        expect(Readable(object, 'setter')).toBe(false);
        expect(Readable(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Test {
            get getter () { return 1 }
        }
        let object = new Test;

        expect(Readable(object, 'getter')).toBe(true);
        expect(Readable(object, 'notExists')).toBe(false);

    });
});

