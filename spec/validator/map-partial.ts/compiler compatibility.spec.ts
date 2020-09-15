import Map from "../../../dist/validator/map-partial";
import And from "../../../dist/validatable/and";
import ValidatorInterface from "@dikac/t-validator/simple";
import MessageMap from "../../../dist/message/message/record/map";
import RemoveUndefined from "../../../dist/omit-undefined";
import Type from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("explicit typed", function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
    };

    type TypeValidator = {
        name : ValidatorInterface<string, string, Instance<string, string>>,
        address :ValidatorInterface<string, string, Instance<string, string>>,
    };

    type Type = {
        name : string,
        address : string,
    }

    let value = {
        name : 'name',
        address : 'address',
    };


    describe("implicit", function() {

        let property = Map(validator, And, MessageMap);

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;

        let string : Type = validatable.value;

    });

    describe("auto", function() {

        let property = Map<
            globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>
            >(validator,
            And,
            (v)=>MessageMap(RemoveUndefined(v))
        );

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });

    describe("direct", function() {

        let property = Map<TypeValidator>(validator, And, (v)=>MessageMap(RemoveUndefined(v)));

        let validatable = property.validate(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });
});



