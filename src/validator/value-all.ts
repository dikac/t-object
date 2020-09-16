import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/record/value";
import MapReturn from "./validatable/record/infer";
import ValueCallback from "./value-callback";
import ValueInterface from "./value";

/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with all record of {@link Validator}
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
export default function ValueAll<
    Base = unknown,
    Value extends Base = Base,
    Message = unknown,
    Validators extends Record<any, Validator<Base, Value>> = Record<any, Validator<Base, Value>>,
    ValidatableType extends Validatable = Validatable
>(
    validators : Validators,
    validation : (result:MapReturn<Validators>) => ValidatableType,
    message : (result:MapReturn<Validators>) => Message,

) : ValueInterface<Base, Value, Message, Validators, MapReturn<Validators>, ValidatableType> {

    return new ValueCallback(
        validators,
        ValidateValue,
        validation,
        message
    ) as ValueInterface<Base, Value, Message, Validators, MapReturn<Validators>, ValidatableType>;
}
