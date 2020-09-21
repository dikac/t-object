import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import {O} from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import ValidateRecordKey from "./validatable/record/record-key";
import RecordKeyCallback from "./record-key-callback";
import RecordKey from "./record-key";

export default function RecordKeyAll<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
    message : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
) : RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return new RecordKeyCallback(
        validator,
        (object, value)=><Record<PropertyKey, ReturnInfer<ValidatorType>>>ValidateRecordKey(object, value),
        validation,
        message
    ) as RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
}














