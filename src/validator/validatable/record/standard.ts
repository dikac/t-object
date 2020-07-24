import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecordParameter from "../../../record/validator/parameter/parameter";
import RecordValidatable from "./record";
import ThrowableValue from "../../../validatable/record/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";


export default function Standard<
    Validators extends Record<PropertyKey, Validator>
    >(
    values : RecordParameter<Validators>,
    validators : Validators,
    stopOnInvalid : true
) : PartialUnion<Validators>

export default function Standard<
    Validators extends Record<PropertyKey, Validator>
    >(
    values : RecordParameter<Validators>,
    validators : Validators,
    stopOnInvalid : false
) : RecordValidatable<Validators>

export default function Standard<
    Validators extends Record<PropertyKey, Validator>
>(
    values : RecordParameter<Validators>,
    validators : Validators,
    stopOnInvalid : boolean
) : PartialUnion<Validators> | RecordValidatable<Validators> {

    let object : RecordValidatable<Validators> = <RecordValidatable<Validators>>{};

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
