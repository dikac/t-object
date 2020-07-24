import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

interface Va<Result, Validatable> {
    validatables : Result;
    validatable : Validatable;
}

export default class ValueCallback<
    Val = unknown,
    Container extends Record<PropertyKey, Validator<Val>> = Record<PropertyKey, Validator<Val>>,
    Result extends Record<PropertyKey, ValidatableInterface> = Record<PropertyKey, ValidatableInterface>,
    Validatable extends ValidatableInterface = ValidatableInterface
    > implements ValueInterface<Val> , ValidatableInterface, Va<Result, Validatable> {

    readonly validatables : Result;
    readonly valid : boolean;
    readonly validatable : Validatable;

    constructor(
        readonly value: Val,
        public validators : Container,
        public handler : Function<[Val, Container], Result>,
        public validation : Function<[Result], Validatable>
    ) {

        this.validatables = this.handler(value, this.validators);
        this.validatable = this.validation(this.validatables);
        this.valid = this.validatable.valid;
    }
}
