import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";

export default function Value<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators
) : ValidatableRecord<Validators> {

    let object  = {};

    for(let property in validators) {

        const validator = validators[property];

        object[<PropertyKey>property] = validator.validate(value);
    }

    return <ValidatableRecord<Validators>> object;
}
