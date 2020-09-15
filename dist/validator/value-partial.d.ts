import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Union from "../union";
import MapReturn from "./validatable/record/infer";
import ValueInterface from "./value";
/**
 * more specific implementation of {@link ValueCallback}
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
export default function ValuePartial<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable>(validators: Validators, validation: (result: Union<ReturnInfer<Validators>>) => ValidatableType, message: (result: Union<ReturnInfer<Validators>>) => MessageType): ValueInterface<BaseType, ValueType, MessageType, Validators, Union<MapReturn<Validators>>, ValidatableType>;
