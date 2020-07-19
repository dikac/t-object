import Recursive from "../../../recursive/recursive";
import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferReturn from "./recursive";
import TypeObject from "../../../boolean/object";
import ThrowableValue from "../../recursive/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";

export default function Value<
    Val,
    Validators extends Recursive<PropertyKey, Validator<Val>>
>(
    validators : Validators,
    value : Val
) : RecursiveInferReturn<Validators> {

    let object : RecursiveInferReturn<Validators> = <RecursiveInferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];

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
