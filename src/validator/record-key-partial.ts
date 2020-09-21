import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import {O} from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import ValidateRecordKeyPartial from "./validatable/record/record-key-partial";
import RecordKeyCallback from "./record-key-callback";
import Union from "../union";
import RecordKey from "./record-key";

export default function RecordKeyPartial<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (partial:Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>ValidatableType,
    message : (partial:Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>)=>MessageType,
) : RecordKey<ValidatorType, Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType> {

    return new RecordKeyCallback(
        validator,
        (value, validators)  => <Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>> ValidateRecordKeyPartial(value, validators),
        validation,
        message
    );
}












