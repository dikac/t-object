import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecordParameter from "../../parameter/base/record/infer";
import ThrowableValue from "../../../validatable/record/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
import InferReturn from "./infer";

export default function Map<
    Validators extends Record<keyof Validators, Validator>
>(
    values : RecordParameter<Validators>,
    validators : Validators
) : InferReturn<Validators> {

    let object : InferReturn<Validators> = <InferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

        object[<PropertyKey>property] = validator.validate(value);

    }

    return  object;
}
