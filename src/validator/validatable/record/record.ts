import RecursiveRecord from "../../../record/record";
import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferArgument from "../../parameter/record/parameter";
import RecursiveInferReturn from "./validatable";
import TypeObject from "../../../boolean/object";
import ThrowableValue from "../../record/assert/throwable/value";
import ThrowableObjectValue from "../../../assert/throwable/value";
import Validator from "@dikac/t-validator/validator";

export default function Record<
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
                object[property] = Record(validator,  value);
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
