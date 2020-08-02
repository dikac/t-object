import ValidatorType from "@dikac/t-validator/boolean/validator";
import ValidatableRecord from "./infer";
import TypeObject from "../../../boolean/object";
import ThrowableValue from "../../../validatable/record/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "../../../partial-union";

export default function Value<
    Val,
    Validators extends Record<PropertyKey, Validator<Val>>
    >(
    value : Val,
    validators : Validators,
    stopOnInvalid : true
) : PartialUnion<ValidatableRecord<Validators>>

export default function Value<
    Val,
    Validators extends Record<PropertyKey, Validator<Val>>
    >(
    value : Val,
    validators : Validators,
    stopOnInvalid : false
) : ValidatableRecord<Validators>

export default function Value<
    Val,
    Validators extends Record<PropertyKey, Validator<Val>>
>(
    value : Val,
    validators : Validators,
    stopOnInvalid = true
) : PartialUnion<ValidatableRecord<Validators>>|ValidatableRecord<Validators> {

    let object : ValidatableRecord<Validators> = <ValidatableRecord<Validators>>{};

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
