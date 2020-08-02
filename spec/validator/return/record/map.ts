import CallValidator from "../../../../dist/validator/return/record/standard";
import Type from "@dikac/t-type/validator/type-standard";

it("force console log", () => spyOn(console, 'log').and.callThrough());

describe("continue on invalid", function() {

    describe("all valid", function() {

        let validator = {
            validator1 : Type("number"),
            validator2 : Type("number"),
        };

        let value = {
            validator1 : 10,
            validator2 : 10,
        };

        let result = CallValidator(value, validator,  false);
        it('match validator1', ()=> expect(result.validator1.valid).toBe(true));
        it('match validator2', ()=> expect(result.validator2.valid).toBe(true));

    });

    describe("all invalid", function() {

        let validator = {
            validator1 : Type("number"),
            validator2 : Type("number"),
        };

        let value = {
            validator1 : '10',
            validator2 : 'str',
        };

        let result = CallValidator(value, validator,  false);
        it('match validator1', ()=> expect(result.validator1.valid).toBe(false));
        it('match validator2', ()=> expect(result.validator2.valid).toBe(false));

    });

    describe("mixed", function() {

        let validator = {
            validator1 : Type("number"),
            validator2 : Type("number"),
        };

        let value = {
            validator1 : 10,
            validator2 : 'str',
        };

        let result = CallValidator(value, validator,  false);
        it('match validator1', ()=> expect(result.validator1.valid).toBe(true));
        it('match validator2', ()=> expect(result.validator2.valid).toBe(false));

    });
});

describe("stop on invalid", function() {

    describe("all valid", function() {

        let validator = {
            validator1 : Type("number"),
            validator2 : Type("number"),
        };

        let value = {
            validator1 : 10,
            validator2 : 10,
        };

        let result = CallValidator(value, validator,  true);


            it('match validator1', ()=> {

                if(result.validator1) {

                    expect(result.validator1.valid).toBe(true)

                } else {

                    expect('result.validator1 must not undefined');
                }
            });

            it('match validator2', ()=> {

                if(result.validator2) {

                    expect(result.validator2.valid).toBe(true)

                } else {

                    expect('result.validator2 must not undefined');
                }
            });

    });

    describe("all invalid", function() {

        let validator = {
            validator1 : Type("number"),
            validator2 : Type("number"),
        };

        let value = {
            validator1 : '10',
            validator2 : 'str',
        };

        let result = CallValidator(value, validator,  true);

        it('match validator1', ()=> {

            if(result.validator1) {

                expect(result.validator1.valid).toBe(false);

            } else {

                expect('first invalid should be available');
            }

        });

        it('match validator2', ()=> expect(result.validator2).toBe(undefined));


    });

    describe("mixed", function() {

        let validator = {
            validator1 : Type("number"),
            validator2 : Type("number"),
            validator3 : Type("number"),
        };

        let value = {
            validator1 : 10,
            validator2 : 'str',
            validator3 : 'str 2',
        };

        let result = CallValidator(value, validator,  true);

        it('match validator1', ()=> {

            if(result.validator1) {

                expect(result.validator1.valid).toBe(true)

            } else {

                expect('result.validator1 must not undefined');
            }

        });

        it('match validator2', ()=> {

            if(result.validator2) {

                expect(result.validator2.valid).toBe(false)

            } else {

                expect('result.validator1 must undefined');
            }

        });

        it('match validator3', ()=> expect(result.validator3).toBe(undefined));

    });
});




describe("extended validatable", function() {

    let validator = {
        validator1 : Type("number"),
        validator2 : Type("number"),

        validator4 : Type("string"),
        validator5 : Type("string"),

        validator7 : Type("number"),
        validator8 : Type("number"),

        validator10 : Type("string"),
        validator11 : Type("string")
    };

    let value = {
        validator1 : 10,
        validator2 : 10,

        validator4 : 'str',
        validator5 : 'str',

        validator7 : 10,
        validator8 : 'str',

        validator10 : 'str',
        validator11 : 10,
    };

    let result = CallValidator(value, validator, false);

    it('match validator1', ()=> expect(result.validator1.valid).toBe(true));
    it('match validator1', ()=> expect(result.validator1.message).toBe('ExtendedNum'));
    it('match validator1', ()=> expect(result.validator1.value).toBe(10));

    it('match validator2', ()=> expect(result.validator2.valid).toBe(true));
    it('match validator2', ()=> expect(result.validator2.message).toBe('ExtendedNumAny'));
    it('match validator2', ()=> expect(result.validator2.value).toBe(10));

    it('match validator4', ()=> expect(result.validator4.valid).toBe(true));
    it('match validator4', ()=> expect(result.validator4.message).toBe('ExtendedStr'));
    it('match validator4', ()=> expect(result.validator4.value).toBe('str'));

    it('match validator5', ()=> expect(result.validator5.valid).toBe(true));
    it('match validator5', ()=> expect(result.validator5.message).toBe('ExtendedStrAny'));
    it('match validator5', ()=> expect(result.validator5.value).toBe('str'));

    it('match validator7', ()=> expect(result.validator7.valid).toBe(true));
    it('match validator7', ()=> expect(result.validator7.message).toBe('ExtendedNum'));
    it('match validator7', ()=> expect(result.validator7.value).toBe(10));

    it('match validator8', ()=> expect(result.validator8.valid).toBe(false));
    it('match validator8', ()=> expect(result.validator8.message).toBe('ExtendedNumAny'));
    it('match validator8', ()=> {

        try {

            let value = result.validator8.value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('ExtendedNumAny');
        }
    });

    it('match validator10', ()=> expect(result.validator10.valid).toBe(true));
    it('match validator10', ()=> expect(result.validator10.message).toBe('ExtendedStr'));
    it('match validator10', ()=> expect(result.validator10.value).toBe('str'));

    it('match validator11', ()=> expect(result.validator11.valid).toBe(false));
    it('match validator11', ()=> expect(result.validator11.message).toBe('ExtendedStrAny'));
    it('match validator11', ()=> {

        try {

            let value = result.validator11.value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('ExtendedStrAny');
        }

       // expect(result.validator6.validator9.validator11.value).toBe(10)
    });


});

//
//
//
// describe("simple validatable", function() {
//     //
//     // let validator3 = new MapAll({
//     //     validator4 : Type("string"),
//     //     validator5 : Type("string")
//     // }, And, MessageMap);
//
//     let validator = {
//         validator1 : Type("number"),
//         validator2 : Type("number"),
//         validator3 : new MapAll({
//             validator4 : Type("string"),
//             validator5 : Type("string")
//         }, And, MessageMap),
// //         validator6 : new MapAll({
// //             validator7 : Type("number"),
// //             validator8 : Type("number"),
// // /*            validator9 : new MapAll({
// //                 validator10 : Type("string"),
// //                 validator11 : Type("string")
// //             }, And, MessageMap),*/
// //         }, And, MessageMap)
//     };
//
//     let value = {
//         validator1 : 10,
//         validator2 : 10,
//         validator3 : {
//             validator4 : 'str',
//             validator5 : 'str'
//         },
// //         validator6 : {
// //             validator7 : 10,
// //             validator8 : 'str',
// // /*            validator9 : {
// //                 validator10 : 'str',
// //                 validator11 : 10
// //             },*/
//  //       }
//     };
//
//      let result = CallValidator(value, validator, false);
//     // it('match validator1', ()=> expect(result.validator1.valid).toBe(true));
//     // it('match validator2', ()=> expect(result.validator2.valid).toBe(true));
//     // it('match validator4', ()=> expect(result.validator3.validatable.validator4.valid).toBe(true));
//     // it('match validator5', ()=> expect(result.validator3.validatable.validator5.valid).toBe(true));
//     // it('match validator7', ()=> expect(result.validator6.validatable.validator7.valid).toBe(true));
//     // it('match validator8', ()=> expect(result.validator6.validatable.validator8.valid).toBe(false));
//     // it('match validator10', ()=> expect(result.validator6.validatable.validator9.validatable.validator10.valid).toBe(true));
//     // it('match validator11', ()=> expect(result.validator6.validatable.validator9.validatable.validator11.valid).toBe(false));
//
// });

//
//
// describe("extended validatable", function() {
//
//     let validator = {
//         validator1 : new ExtendedNum(),
//         validator2 : new ExtendedNumAny(),
//         validator3 : new Record({
//             validator4 : new ExtendedStr(),
//             validator5 : new ExtendedStrAny()
//         }),
//         validator6 : new Record({
//             validator7 : new ExtendedNum(),
//             validator8 : new ExtendedNumAny(),
//             validator9 : new Record({
//                 validator10 : new ExtendedStr(),
//                 validator11 : new ExtendedStrAny()
//             }),
//         })
//     };
//
//     let value = {
//         validator1 : 10,
//         validator2 : 10,
//         validator3 : {
//             validator4 : 'str',
//             validator5 : 'str'
//         },
//         validator6 : {
//             validator7 : 10,
//             validator8 : 'str',
//             validator9 : {
//                 validator10 : 'str',
//                 validator11 : 10
//             },
//         }
//     };
//
//     let result = CallValidator(validator, value, false);
//
//     it('match validator1', ()=> expect(result.validator1.valid).toBe(true));
//     it('match validator1', ()=> expect(result.validator1.message).toBe('ExtendedNum'));
//     it('match validator1', ()=> expect(result.validator1.value).toBe(10));
//
//     it('match validator2', ()=> expect(result.validator2.valid).toBe(true));
//     it('match validator2', ()=> expect(result.validator2.message).toBe('ExtendedNumAny'));
//     it('match validator2', ()=> expect(result.validator2.value).toBe(10));
//
//     it('match validator4', ()=> expect(result.validator3.validatable.validator4.valid).toBe(true));
//     it('match validator4', ()=> expect(result.validator3.validatable.validator4.message).toBe('ExtendedStr'));
//     it('match validator4', ()=> expect(result.validator3.validatable.validator4.value).toBe('str'));
//
//     it('match validator5', ()=> expect(result.validator3.validatable.validator5.valid).toBe(true));
//     it('match validator5', ()=> expect(result.validator3.validatable.validator5.message).toBe('ExtendedStrAny'));
//     it('match validator5', ()=> expect(result.validator3.validatable.validator5.value).toBe('str'));
//
//     it('match validator7', ()=> expect(result.validator6.validatable.validator7.valid).toBe(true));
//     it('match validator7', ()=> expect(result.validator6.validatable.validator7.message).toBe('ExtendedNum'));
//     it('match validator7', ()=> expect(result.validator6.validatable.validator7.value).toBe(10));
//
//     it('match validator8', ()=> expect(result.validator6.validatable.validator8.valid).toBe(false));
//     it('match validator8', ()=> expect(result.validator6.validatable.validator8.message).toBe('ExtendedNumAny'));
//     it('match validator8', ()=> {
//
//         try {
//
//             let value = result.validator6.validatable.validator8.value;
//             fail('exception should be thrown')
//
//         } catch (e) {
//
//             expect(e).toBeInstanceOf(Error);
//             expect(e.message).toBe('ExtendedNumAny');
//         }
//     });
//
//     it('match validator10', ()=> expect(result.validator6.validatable.validator9.validatable.validator10.valid).toBe(true));
//     it('match validator10', ()=> expect(result.validator6.validatable.validator9.validatable.validator10.message).toBe('ExtendedStr'));
//     it('match validator10', ()=> expect(result.validator6.validatable.validator9.validatable.validator10.value).toBe('str'));
//
//     it('match validator11', ()=> expect(result.validator6.validatable.validator9.validatable.validator11.valid).toBe(false));
//     it('match validator11', ()=> expect(result.validator6.validatable.validator9.validatable.validator11.message).toBe('ExtendedStrAny'));
//     it('match validator11', ()=> {
//
//         try {
//
//             let value = result.validator6.validatable.validator9.validatable.validator11.value;
//             fail('exception should be thrown')
//
//         } catch (e) {
//
//             expect(e).toBeInstanceOf(Error);
//             expect(e.message).toBe('ExtendedStrAny');
//         }
//
//        // expect(result.validator6.validator9.validator11.value).toBe(10)
//     });
//
//
// });
