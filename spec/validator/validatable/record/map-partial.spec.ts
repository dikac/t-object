import CallValidator from "../../../../dist/validator/validatable/record/map-partial";
import Type from "@dikac/t-type/validator/type-standard";

it("force console log", () => spyOn(console, 'log').and.callThrough());


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

        let result = CallValidator(value, validator);


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

        let result = CallValidator(value, validator);

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

        let result = CallValidator(value, validator);

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
