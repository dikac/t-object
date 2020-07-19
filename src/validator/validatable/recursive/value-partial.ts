import Recursive from "../../../recursive/recursive";
import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferReturn from "./recursive";
import TypeObject from "../../../boolean/object";
import ThrowableValue from "../../recursive/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import {Object} from "ts-toolbelt";

export default function ValuePartial<
    Val,
    Validators extends Recursive<PropertyKey, Validator<Val>>
>(
    validators : Validators,
    value : Val,
    stopOnInvalid = true
) : Object.Partial<RecursiveInferReturn<Validators>, 'deep'> {

    let object : RecursiveInferReturn<Validators> = <RecursiveInferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];

        if(ValidatorType(validator)) {

            let validatable = validator.validate(value);

            if(stopOnInvalid && !validatable.valid) {

                return object;
            }

            // @ts-ignore
            object[property] = validatable;
            continue;
        }

        if(TypeObject(validator)) {

            // @ts-ignore
            object[property] = ValuePartial(validator,  value, stopOnInvalid);
            continue;
        }

        throw ThrowableValue(property);
    }

    return  object;
}
