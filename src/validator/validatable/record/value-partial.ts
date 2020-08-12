import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";

export default function ValuePartial<
    ValueT,
    Validators extends Record<PropertyKey, Validator<ValueT>>,
>(
    value : ValueT,
    validators : Validators,
) : PartialUnion<ValidatableRecord<Validators>> {

    let object = {};

    for(let property in validators) {

        const validator = validators[property];

        object[<PropertyKey>property] = validator.validate(value);

        if(!object[<PropertyKey>property].valid) {

            return object;
        }
    }

    return <ValidatableRecord<Validators>> object;
}
