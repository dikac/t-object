import Type from "@dikac/t-type/validator/type-standard";
import Record from "../../../../dist/validator/validatable/record/record-value";
import Validator from "@dikac/t-validator/validator";

it("force console log", () => spyOn(console, 'log').and.callThrough());

describe("compiler compatibility", function() {

    describe("explicit valid", function() {

        type ValueValidator = Validator<any, number>;
        type KeyValidator = Validator<any, string>;
        type Value = {
            validator1 : number,
            validator2 : number,
        };

        let value : ValueValidator = Type("number");
        let key : KeyValidator = Type("string");

        let record : Value = {
            validator1 : 10,
            validator2 : 10,
        };

        Record(record, value);
    });

    describe("implicit", function() {

        let value = Type("number");
        let key = Type("string");

        let record = {
            validator1 : 10,
            validator2 : 10,
        };

        Record(record, value);
    });

    describe("auto", function() {

        let value = Type("number");
        let key = Type("string");

        let record = {
            validator1 : 10,
            validator2 : 10,
        };

        Record(record, value);
    });
});
