import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecordParameter from "../../parameter/base/record/infer";
import ThrowableValue from "../../../validatable/record/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";
import InferReturn from "./infer";

export default function Map<
    Validators extends Record<PropertyKey, Validator>
>(
    values : RecordParameter<Validators>,
    validators : Validators,
    stopOnInvalid : true
) : PartialUnion<InferReturn<Validators>>

export default function Map<
    Validators extends Record<PropertyKey, Validator>
>(
    values : RecordParameter<Validators>,
    validators : Validators,
    stopOnInvalid : false
) : InferReturn<Validators>

export default function Map<
    Validators extends Record<PropertyKey, Validator>
>(
    values : RecordParameter<Validators>,
    validators : Validators,
    stopOnInvalid : boolean
) :  PartialUnion<InferReturn<Validators>> | InferReturn<Validators> {

    let object : InferReturn<Validators> = <InferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

        if(ValidatorType(validator)) {

            // @ts-ignore
            object[property] = validator.validate(value);

            if(stopOnInvalid && !object[property].valid) {

                return object;
            }

            continue;
        }

        throw ThrowableValue(property);
    }

    return  object;
}
