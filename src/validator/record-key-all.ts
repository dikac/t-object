import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import {O} from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import ValidateRecordKey from "./validatable/record/record-key";
import RecordKeyCallback from "./record-key-callback";
import RecordKey from "./record-key";

export default function RecordKeyAll<
    Base extends Record<PropertyKey, any> = Record<PropertyKey, any>,
    Type extends Base = Base,
    ValidatorType extends Validator<O.UnionOf<Base>, O.UnionOf<Type>> = Validator<O.UnionOf<Base>, O.UnionOf<Type>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType,
    message : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType,
) : RecordKey<Base, Type, ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return new RecordKeyCallback(
        validator,
        (object, value)=><Record<PropertyKey, ReturnInfer<ValidatorType>>>ValidateRecordKey(object, value),
        validation,
        message
    ) as RecordKey<Base, Type, ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
}














