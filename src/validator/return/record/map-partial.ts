import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecordParameter from "../../parameter/base/record/infer";
import ThrowableValue from "../../../validatable/record/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
import InferReturn from "./infer";

export default function MapPartial<
    Validators extends Record<keyof Validators, Validator>
>(
    values : RecordParameter<Validators>,
    validators : Validators,
) : PartialUnion<InferReturn<Validators>> {

    let object : InferReturn<Validators> = <InferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

        object[<PropertyKey>property] = validator.validate(value);

        if(!object[property].valid) {

            return object;
        }
    }

    return  object;
}
