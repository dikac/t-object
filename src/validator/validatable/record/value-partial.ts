import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";

export default function ValuePartial<
    ValueT,
    Validators extends Record<PropertyKey, Validator<ValueT>>,
>(
    value : ValueT,
    validators : Validators,
    stop : boolean = false
) : Partial<ValidatableRecord<Validators>> {

    let object = {};

    for(let property in validators) {

        const validator = validators[property];

        object[<PropertyKey>property] = validator.validate(value);

        if(object[<PropertyKey>property].valid === stop) {

            return object;
        }
    }

    return <ValidatableRecord<Validators>> object;
}
