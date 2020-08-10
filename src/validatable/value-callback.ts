import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";

export type Interface<
    ValueT,
    MessageT,
    RecordT extends Record<PropertyKey, Validator<ValueT>>,
    Result extends Record<PropertyKey, ValidatorValidatable>,
    ValidatableT extends Validatable
> =
    Readonly<Value<ValueT>> &
    Readonly<Validatable<boolean>> &
    Readonly<Validatables<Result>> &
    Readonly<Messages<Result>> &
    Readonly<Message<MessageT>>
;

export default class ValueCallback<
    ValueT = unknown,
    MessageT = unknown,
    RecordT extends Record<PropertyKey, Validator<ValueT>> = Record<PropertyKey, Validator<ValueT>>,
    Result extends Record<PropertyKey, ValidatorValidatable> = Record<PropertyKey, ValidatorValidatable>,
    ValidatableT extends Validatable = Validatable
> implements Interface<ValueT, MessageT, RecordT, Result, ValidatableT> {

    constructor(
        readonly value: ValueT,
        readonly validators : RecordT,
        readonly map : Function<[ValueT, RecordT], Result>,
        readonly validation : Function<[Result], ValidatableT>,
        readonly messageFactory : Function<[Result], MessageT>,
    ) {

    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get validatable () : ValidatableT {

        const validatable = this.validation(this.validatables);

        return Object.defineProperty(this, 'validatable', {
            get() {
                return validatable;
            }
        }).validatable;
    }

    get messages() : Result {

        return this.validatables;
    }

    get validatables() : Result {

        const validatables = this.map(this.value, this.validators);

        return Object.defineProperty(this, 'validatables', {
            get() {
                return validatables;
            }
        }).validatables;
    }

    get message() : MessageT {

        const message = this.messageFactory(this.validatables);

        return Object.defineProperty(this, 'message', {
            get() {
                return message;
            }
        }).message;

    }
}
