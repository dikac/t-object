import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";

export default function Value<
    ValueT,
    Validators extends Record<PropertyKey, Validator<ValueT>>,
>(
    value : ValueT,
    validators : Validators
) : ValidatableRecord<Validators> {

    let object  = {};

    for(let property in validators) {

        const validator = validators[property];

        object[<PropertyKey>property] = validator.validate(value);
    }

    return <ValidatableRecord<Validators>> object;
}
