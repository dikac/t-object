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



describe('class inheritance', () => {

    it('property', () => {

        class Parent {
            parent = true
        }

        class Child extends Parent {
            child = true
        }
        let object = new Child;

        expect(Readable(object, 'child')).toBe(true);
        expect(Readable(object, 'parent')).toBe(true);
        expect(Readable(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Parent {
            set parent (value) {}
        }

        class Child extends Parent {
            set child (value) {}
        }

        let object = new Child;

        expect(Readable(object, 'child')).toBe(false);
        expect(Readable(object, 'parent')).toBe(false);
        expect(Readable(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Parent {
            get parent () { return 1 }
        }

        class Child extends Parent {
            get child () { return 1 }
        }

        let object = new Child;

        expect(Readable(object, 'parent')).toBe(true);
        expect(Readable(object, 'child')).toBe(true);
        expect(Readable(object, 'notExists')).toBe(false);

    });
});

