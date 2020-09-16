import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValueCallback from "../validatable/value-callback";
import ValidatableValue from "../validatable/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import Value from "./value";
import Message from "@dikac/t-message/message";

/**
 * Base implementation of {@link Value}
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
export default class ValueCallback<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    ValidatorsType extends Record<any, Validator<BaseType, ValueType>> = Record<any, Validator<BaseType, ValueType>>,
    Validatables extends Record<any, Instance> = Record<any, Instance>,
    ValidatableType extends Validatable = Validatable
> implements Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {
    /**
     * @param validators
     * record of {@link Validator}
     *
     * @param map
     * process value and {@param validators} to list of {@link Instance}
     *
     * @param validation
     * process result of {@param map} to single {@link Validatable}
     *
     * @param message
     * process result of {@param map} to single {@link Message}
     */
    constructor(
        public validators : ValidatorsType,
        public map : (base : BaseType, record : ValidatorsType) => Validatables,
        public validation : (result : Validatables)=>ValidatableType,
        public message : (result : Validatables)=>MessageType
    ) {
    }

    validate<Argument extends ValueType>(argument: Argument) : Replace<ValidatableValue<Argument, MessageType, ValidatorsType, Validatables, ValidatableType>, true>;
    validate<Argument extends BaseType>(argument: Argument) : Return<BaseType, Argument, ValueType, ValidatableValue<Argument, MessageType, ValidatorsType, Validatables, ValidatableType>>
    validate<Argument extends BaseType>(argument: Argument) {

        return <ValidatableValue<Argument, MessageType, ValidatorsType, Validatables, ValidatableType> | Return<BaseType, Argument, ValueType, ValidatableValueCallback<BaseType, MessageType, ValidatorsType, Validatables, ValidatableType>>>
            new ValidatableValueCallback(argument, this.validators, this.map, this.validation, this.message);
    }
}
