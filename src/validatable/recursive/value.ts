import Recursive from "../../recursive/recursive";
import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferReturn from "./recursive";
import TypeObject from "../../boolean/object";
import ThrowableValue from "./assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import {Object} from "ts-toolbelt";

export default function Value<
    Val,
    Validators extends Recursive<PropertyKey, Validator<Val>>
    >(
    validators : Validators,
    value : Val,
    stopOnInvalid : true
) : Object.Partial<RecursiveInferReturn<Validators>, 'deep'>

export default function Value<
    Val,
    Validators extends Recursive<PropertyKey, Validator<Val>>
    >(
    validators : Validators,
    value : Val,
    stopOnInvalid : false
) : RecursiveInferReturn<Validators>

export default function Value<
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

            // @ts-ignore
            object[property] = validator.validate(value);

            if(stopOnInvalid && !object[property].valid) {

                return object;
            }

            continue;
        }

        if(TypeObject(validator)) {

            // @ts-ignore
            object[property] = Value(validator,  value, stopOnInvalid);
            continue;
        }

        throw ThrowableValue(property);
    }

    return  object;
}
