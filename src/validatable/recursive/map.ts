import RecursiveRecord from "../../recursive/recursive";
import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferArgument from "../../recursive/validator/parameter/parameter";
import RecursiveInferReturn from "../../validator/validatable/recursive/recursive";
import TypeObject from "../../boolean/object";
import ThrowableValue from "./assert/throwable/value";
import ThrowableObjectValue from "../../assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import Optional from "../../validator/validatable/recursive/optional";

export default function Map<
    Validators extends RecursiveRecord<PropertyKey, Validator>
    >(
    validators : Validators,
    values : RecursiveInferArgument<Validators>,
    stopOnInvalid : true
) : Optional<Validators>

export default function Map<
    Validators extends RecursiveRecord<PropertyKey, Validator>
    >(
    validators : Validators,
    values : RecursiveInferArgument<Validators>,
    stopOnInvalid : false
) : RecursiveInferReturn<Validators>

export default function Map<
    Validators extends RecursiveRecord<PropertyKey, Validator>
>(
    validators : Validators,
    values : RecursiveInferArgument<Validators>,
    stopOnInvalid : boolean
) : Optional<Validators> | RecursiveInferReturn<Validators> {

    let object : RecursiveInferReturn<Validators> = <RecursiveInferReturn<Validators>>{};

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

        if(TypeObject(validator)) {

            if(TypeObject(value)) {

                // @ts-ignore
                object[property] = Map(validator,  value, stopOnInvalid);

            } else {

                throw ThrowableObjectValue(property, 'object');
            }

        } else {

            throw ThrowableValue(property);
        }
    }

    return  object;
}
