import CallValidator from "../../../dist/validatable/recursive/map";
import Num from "../../validator/num";
import ExtendedNum from "../../validator/extended-num";
import ExtendedNumAny from "../../validator/extended-num-any";
import ExtendedStr from "../../validator/extended-str";
import ExtendedStrAny from "../../validator/extended-str-any";
import NumAny from "../../validator/num-any";
import Str from "../../validator/str";
import StrAny from "../../validator/str-any";

it("force console log", () => spyOn(console, 'log').and.callThrough());


describe("simple validatable", function() {


    let validator = {
        validator1 : new Num(),
        validator2 : new NumAny(),
        validator3 : {
            validator4 : new Str(),
            validator5 : new StrAny()
        },
        validator6 : {
            validator7 : new Num(),
            validator8 : new NumAny(),
            validator9 : {
                validator10 : new Str(),
                validator11 : new StrAny()
            },
        }
    };

    let value = {
        validator1 : 10,
        validator2 : 10,
        validator3 : {
            validator4 : 'str',
            validator5 : 'str'
        },
        validator6 : {
            validator7 : 10,
            validator8 : 'str',
            validator9 : {
                validator10 : 'str',
                validator11 : 10
            },
        }
    };

    let result = CallValidator(validator, value, false);
    it('match validator1', ()=> expect(result.validator1.valid).toBe(true));
    it('match validator2', ()=> expect(result.validator2.valid).toBe(true));
    it('match validator4', ()=> expect(result.validator3.validator4.valid).toBe(true));
    it('match validator5', ()=> expect(result.validator3.validator5.valid).toBe(true));
    it('match validator7', ()=> expect(result.validator6.validator7.valid).toBe(true));
    it('match validator8', ()=> expect(result.validator6.validator8.valid).toBe(false));
    it('match validator10', ()=> expect(result.validator6.validator9.validator10.valid).toBe(true));
    it('match validator11', ()=> expect(result.validator6.validator9.validator11.valid).toBe(false));

});


describe("extended validatable", function() {

    let validator = {
        validator1 : new ExtendedNum(),
        validator2 : new ExtendedNumAny(),
        validator3 : {
            validator4 : new ExtendedStr(),
            validator5 : new ExtendedStrAny()
        },
        validator6 : {
            validator7 : new ExtendedNum(),
            validator8 : new ExtendedNumAny(),
            validator9 : {
                validator10 : new ExtendedStr(),
                validator11 : new ExtendedStrAny()
            },
        }
    };

    let value = {
        validator1 : 10,
        validator2 : 10,
        validator3 : {
            validator4 : 'str',
            validator5 : 'str'
        },
        validator6 : {
            validator7 : 10,
            validator8 : 'str',
            validator9 : {
                validator10 : 'str',
                validator11 : 10
            },
        }
    };

    let result = CallValidator(validator, value, false);

    it('match validator1', ()=> expect(result.validator1.valid).toBe(true));
    it('match validator1', ()=> expect(result.validator1.message).toBe('ExtendedNum'));
    it('match validator1', ()=> expect(result.validator1.value).toBe(10));

    it('match validator2', ()=> expect(result.validator2.valid).toBe(true));
    it('match validator2', ()=> expect(result.validator2.message).toBe('ExtendedNumAny'));
    it('match validator2', ()=> expect(result.validator2.value).toBe(10));

    it('match validator4', ()=> expect(result.validator3.validator4.valid).toBe(true));
    it('match validator4', ()=> expect(result.validator3.validator4.message).toBe('ExtendedStr'));
    it('match validator4', ()=> expect(result.validator3.validator4.value).toBe('str'));

    it('match validator5', ()=> expect(result.validator3.validator5.valid).toBe(true));
    it('match validator5', ()=> expect(result.validator3.validator5.message).toBe('ExtendedStrAny'));
    it('match validator5', ()=> expect(result.validator3.validator5.value).toBe('str'));

    it('match validator7', ()=> expect(result.validator6.validator7.valid).toBe(true));
    it('match validator7', ()=> expect(result.validator6.validator7.message).toBe('ExtendedNum'));
    it('match validator7', ()=> expect(result.validator6.validator7.value).toBe(10));

    it('match validator8', ()=> expect(result.validator6.validator8.valid).toBe(false));
    it('match validator8', ()=> expect(result.validator6.validator8.message).toBe('ExtendedNumAny'));
    it('match validator8', ()=> {

        try {

            let value = result.validator6.validator8.value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('ExtendedNumAny');
        }
    });

    it('match validator10', ()=> expect(result.validator6.validator9.validator10.valid).toBe(true));
    it('match validator10', ()=> expect(result.validator6.validator9.validator10.message).toBe('ExtendedStr'));
    it('match validator10', ()=> expect(result.validator6.validator9.validator10.value).toBe('str'));

    it('match validator11', ()=> expect(result.validator6.validator9.validator11.valid).toBe(false));
    it('match validator11', ()=> expect(result.validator6.validator9.validator11.message).toBe('ExtendedStrAny'));
    it('match validator11', ()=> {

        try {

            let value = result.validator6.validator9.validator11.value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('ExtendedStrAny');
        }

       // expect(result.validator6.validator9.validator11.value).toBe(10)
    });


});
