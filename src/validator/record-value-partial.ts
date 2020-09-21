import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import MapInterface from "../map";
import ValidateMap from "./validatable/record/record-value-partial";
import RecordValueCallback from "./record-value-callback";
import RecordValue from "./record-value";

export default function RecordValuePartial<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> (
    validator : ValidatorType,
    validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
    message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
) : RecordValue<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>  {

    return new RecordValueCallback(
            validator,
        (value, validators)  =>  ValidateMap(value, validators),
        validation,
        message
    );
}
