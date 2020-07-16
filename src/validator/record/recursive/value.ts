import Record from "../../../record/recursive/record";
import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferReturn from "./infer/return";
import TypeObject from "../../..//boolean/object";
import ThrowableValue from "./assert/throwable/value";
import Validator from "@dikac/t-validator/validator";

export default function Value<
    Val,
    Validators extends Record<PropertyKey, Validator<Val>>
>(
    validators : Validators,
    value : Val
) : RecursiveInferReturn<Validators> {

    let object : RecursiveInferReturn<Validators> = <RecursiveInferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];
        //const value = values[property];

        if(ValidatorType(validator)) {

            // @ts-ignore
            object[property] = validator.validate(value);
            continue;
        }

        if(TypeObject(validator)) {

            // @ts-ignore
            object[property] = Value(validator,  value);
            continue;
        }

        throw ThrowableValue(property);
    }

    return  object;
}
