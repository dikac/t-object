import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValue from "../validatable/value";
import Message from "@dikac/t-message/message";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Instance from "@dikac/t-validator/validatable/validatable";
export default interface Value<Base, Value extends Base, MessageType, RecordType extends Record<any, Validator<Base, Value>>, Result extends Record<any, Instance>, ValidatableType extends Validatable> extends Validator<Base, Value, boolean, true, ValidatableValue<Base, MessageType, RecordType, Result, ValidatableType>>, Validators<RecordType>, Message<(result: Result) => MessageType>, Validation<(result: Result) => ValidatableType> {
}
