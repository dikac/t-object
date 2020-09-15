import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import MapCallback from "../../../dist/validatable/map-callback";
import ValidateMap from "../../../dist/validator/validatable/record/map";
import ValidatableInfer from "../../../dist/validator/validatable/record/infer";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateMapPartial from "../../../dist/validator/validatable/record/map-partial";
import Message from "@dikac/t-message/message";
import Type from "@dikac/t-type/validator/type-standard";

let validator = {
    name : Type('string'),
    address : Type('string'),
};

type TypeValidator = {
    name : ValidatorInterface<any, string, Instance<any, string>>,
    address :ValidatorInterface<any, string, Instance<any, string>>,
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

    let validatable = new MapCallback(value, validator, ValidateMap, And, MessageMap);

    let unknown : unknown = validatable.value;

    let string : Type = validatable.value;

});

describe("explicit", function() {

    describe("auto", function() {

        let validatable = new MapCallback<
            Type,
            TypeValidator,
            ValidatableInfer<TypeValidator>,
            Validatable,
            Type
        >(
            value,
            validator,
            ValidateMap,
            And,
            MessageMap
        );

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

});
