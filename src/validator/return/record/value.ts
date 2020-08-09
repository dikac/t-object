import ValidatorType from "@dikac/t-validator/boolean/validator";
import ValidatableRecord from "./infer";
import TypeObject from "../../../boolean/object";
import ThrowableValue from "../../../validatable/record/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";

export default function Value<
    ValueT,
    Validators extends Record<keyof Validators, Validator<ValueT>>,
    >(
    value : ValueT,
    validators : Validators
) : ValidatableRecord<Validators> {

    let object : ValidatableRecord<Validators> = <ValidatableRecord<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];

        object[<PropertyKey>property] = validator.validate(value);
    }

    return  object;
}
