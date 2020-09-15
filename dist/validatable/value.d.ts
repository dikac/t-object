import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import BaseValue from "@dikac/t-value/value";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
export default interface Value<ValueType, MessageType, RecordType extends Record<PropertyKey, Validator<ValueType>>, Result extends Record<PropertyKey, ValidatorValidatable>, ValidatableType extends Validatable> extends Readonly<BaseValue<ValueType>>, Readonly<Validatable<boolean>>, Readonly<Validatables<Result>>, Readonly<Messages<Result>>, Readonly<Message<MessageType>> {
}
