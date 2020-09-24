import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValue from "../validatable/value";
import Message from "@dikac/t-message/message";
import Validation from "@dikac/t-validatable/validation/validation";
import Validators from "./validators/validators";
import Instance from "@dikac/t-validator/validatable/validatable";
/**
 * extended {@link Validator} for validating value with record of {@link Validator}
 *
 * @template BaseType
 * Base value type for all {@link Validator}
 *
 * @template ValueType
 * value type {@link Validator}
 *
 * @template MessageType
 * message type {@link Validator}
 *
 * @template ValidatorsType
 * record of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @template Validatables
 * result after processing {@template ValidatorsType} with {@template BaseType} or {@template ValueType}
 *
 * @template ValidatableType
 * final result after processing {@template Validatables}
 */
export default interface Value<Base, Value extends Base, MessageType, RecordType extends Record<PropertyKey, Validator<Base, Value>>, Result extends Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable> extends Validator<Base, Value, boolean, true, ValidatableValue<Base, MessageType, RecordType, Result, ValidatableType>>, Validators<RecordType>, Message<(result: Result) => MessageType>, Validation<(result: Result) => ValidatableType> {
}
