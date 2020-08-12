import RecordParameter from "../../base/record/infer";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";

export default function Map<
    Validators extends Record<PropertyKey, Validator>
>(
    values : RecordParameter<Validators>,
    validators : Validators
) : InferReturn<Validators> {

    let object = {};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

        object[<PropertyKey>property] = validator.validate(value);
    }

    return <InferReturn<Validators> > object;
}
