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


it("same value", function() {

    let value = {
        name : 'name',
        address : 'address',
    };

    let validatable = new MapCallback(value, validator, ValidateMap, And, MessageMap);

    expect(value).toEqual(validatable.value);

});

it('extra', function() {

    let value = {
        name : 'name',
        address : 'address',
        extra : 'value',
    };

    let validatable = new MapCallback(value, validator, ValidateMap, And, MessageMap);

    expect(value).not.toEqual(validatable.value);

    expect({
        name : 'name',
        address : 'address'
    }).toEqual(validatable.value);

});

it('missing', function() {

    let value = {
        name : 'name',
    };

    // @ts-expect-error
    let validatable = new MapCallback(value, validator, ValidateMap, And, MessageMap);

    // @ts-expect-error
    expect(value).not.toEqual(validatable.value);

    // @ts-expect-error
    expect({name : 'name', address : 'address'}).not.toEqual(validatable.value);

    // @ts-expect-error
    expect({name : 'name', address : undefined}).toEqual(validatable.value);

});
