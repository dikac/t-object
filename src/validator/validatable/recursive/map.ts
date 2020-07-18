import RecursiveRecord from "../../../recursive/recursive";
import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferArgument from "../../parameter/recursive/recursive";
import RecursiveInferReturn from "./recursive";
import TypeObject from "../../../boolean/object";
import ThrowableValue from "../../recursive/assert/throwable/value";
import ThrowableObjectValue from "../../../assert/throwable/value";
import Validator from "@dikac/t-validator/validator";

export default function Map<
    Validators extends RecursiveRecord<PropertyKey, Validator<unknown>>
>(
    validators : Validators,
    values : RecursiveInferArgument<Validators>
) : RecursiveInferReturn<Validators> {

    let object : RecursiveInferReturn<Validators> = <RecursiveInferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

        if(ValidatorType(validator)) {

            // @ts-ignore
            object[property] = validator.validate(value);
            continue;
        }

        if(TypeObject(validator)) {

            if(TypeObject(value)) {

                // @ts-ignore
                object[property] = Map(validator,  value);
               /* continue;*/

            } else {

                throw ThrowableObjectValue(property, 'object');
            }

        } else {


            throw ThrowableValue(property);
        }

    }

    return  object;
}
