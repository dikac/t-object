import Type from "../../../../dist/descriptor/get/boolean/descriptor";



describe("getter/setter", function() {

    describe("class", function() {

        class Class {

            set setter (value) {}
            get getter () { return 1}
        }

        let object = new Class();

        it(`check setter`, () => {

            let prototype = Object.getPrototypeOf(object);
            let descriptor = Object.getOwnPropertyDescriptor(prototype, 'setter');

           // console.log(descriptor);

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {

            let prototype = Object.getPrototypeOf(object);
            let descriptor = Object.getOwnPropertyDescriptor(prototype, 'getter');

            if(descriptor) {

                expect(Type(descriptor)).toBeTrue();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });



    describe("object", function() {


        let object = {
            set setter (value) {},
            get getter () { return 1}
        };

        it(`check setter`, () => {


            let descriptor = Object.getOwnPropertyDescriptor(object, 'setter');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {


            let descriptor = Object.getOwnPropertyDescriptor(object, 'getter');

            if(descriptor) {

                expect(Type(descriptor)).toBeTrue();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });



    describe("native", function() {

        let string = new String('a');

        it(`check setter`, () => {

            let descriptor = Object.getOwnPropertyDescriptor(string, 'length');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {


            let descriptor = Object.getOwnPropertyDescriptor(string, 'length');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });
});


describe("property", function() {

    describe("class", function() {

        class Class {
            data = 1
        }

        let object = new Class();

        it(`check setter`, () => {

            let descriptor = Object.getOwnPropertyDescriptor(object, 'data');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {


            let descriptor = Object.getOwnPropertyDescriptor(object, 'data');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });

    describe("native", function() {

        let string = new Array('a');

        it(`check setter`, () => {

            let descriptor = Object.getOwnPropertyDescriptor(string, 'length');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {


            let descriptor = Object.getOwnPropertyDescriptor(string, 'length');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });
});
