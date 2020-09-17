import ValidatableValueCallback from "../validatable/value-callback";
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
export default class ValueCallback {
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
    constructor(validators, map, validation, message) {
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        this.message = message;
    }
    validate(argument) {
        return new ValidatableValueCallback(argument, this.validators, this.map, this.validation, this.message);
    }
}
//# sourceMappingURL=value-callback.js.map