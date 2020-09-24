import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import MapReturn from "./validatable/record/infer";
import ValueInterface from "./value";
/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with record of {@link Validator}
 * stop on encounter {@param stop} result from {@link Validator}
 *
 * @param validators
 * record of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @param validation
 *
 * @param message
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
 * @template Validators
 * type of {@param validators}
 *
 * @template ValidatableType
 * result after processing {@template Validators} with {@template BaseType} or {@template ValueType}
 */
export default function ValuePartial<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable>(validators: Validators, validation: (result: Partial<ReturnInfer<Validators>>) => ValidatableType, message: (result: Partial<ReturnInfer<Validators>>) => MessageType, stop?: boolean): ValueInterface<BaseType, ValueType, MessageType, Validators, Partial<MapReturn<Validators>>, ValidatableType>;
