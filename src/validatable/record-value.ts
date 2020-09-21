import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Value from "@dikac/t-value/value";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import {O} from "ts-toolbelt";
import SetGetter from "../value/value/set-getter";

export default interface RecordValue<
    MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>,
    ValidatableType extends Validatable = Validatable
> extends
    ValidatorContainer<ValidatorType>,
    ValidatableContainer<ValidatableType>,
    Value<ValueType>,
    Validatable,
    Validatables<Result>,
    Message<MessageType>
{

}
