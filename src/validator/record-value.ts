import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import ValidateMap from "./validatable/record/record-value";
import RecordValueCallback, {Interface} from "./record-value-callback";

export default function RecordValue<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType,
    message : (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType,
) : Interface<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return new RecordValueCallback(
        validator,
        ValidateMap,
        validation,
        message
    ) as Interface<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> ;
}
