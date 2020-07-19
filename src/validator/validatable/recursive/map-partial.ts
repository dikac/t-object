import RecursiveRecord from "../../../recursive/recursive";
import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferArgument from "../../parameter/recursive/recursive";
import RecursiveInferReturn from "./recursive";
import TypeObject from "../../../boolean/object";
import ThrowableValue from "../../recursive/assert/throwable/value";
import ThrowableObjectValue from "../../../assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import {Object} from "ts-toolbelt";

export default function MapPartial<
    Validators extends RecursiveRecord<PropertyKey, Validator<unknown>>
>(
    validators : Validators,
    values : RecursiveInferArgument<Validators>,
    stopOnInvalid = true
) : Object.Partial<RecursiveInferReturn<Validators>, 'deep'> {

    let object : RecursiveInferReturn<Validators> = <RecursiveInferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

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

            if(TypeObject(value)) {

                // @ts-ignore
                object[property] = MapPartial(validator,  value, stopOnInvalid);

            } else {

                throw ThrowableObjectValue(property, 'object');
            }

        } else {

            throw ThrowableValue(property);
        }

    }

    return  object;
}
