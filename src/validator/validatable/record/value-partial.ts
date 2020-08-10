import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";

export default function ValuePartial<
    Val,
    Validators extends Record<keyof Validators, Validator<Val>>,
>(
    value : Val,
    validators : Validators,
) : PartialUnion<ValidatableRecord<Validators>> {

    let object : ValidatableRecord<Validators> = <ValidatableRecord<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];

        object[<PropertyKey>property] = validator.validate(value);

        if(!object[property].valid) {

            return object;
        }
    }

    return  object;
}
