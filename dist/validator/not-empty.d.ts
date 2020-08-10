import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/validatable/simple";
export default class NotEmpty<MessageT> implements Validator<object, object, boolean, boolean, NotEmptyValidatable<object, MessageT>>, Message<Function<[Readonly<Value & Validatable>], MessageT>> {
    message: Function<[Readonly<Value<object> & Validatable>], MessageT>;
    constructor(message: Function<[Readonly<Value<object> & Validatable>], MessageT>);
    validate<Argument extends object>(value: Argument): Return<object, Argument, object, NotEmptyValidatable<Argument, MessageT>>;
}
