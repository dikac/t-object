import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
export default class Empty<MessageT> implements Validator<object, object, boolean, boolean, EmptyValidatable<object, MessageT>>, Message<(result: Readonly<Value<object> & Validatable>) => MessageT> {
    message: (result: Readonly<Value<object> & Validatable>) => MessageT;
    constructor(message: (result: Readonly<Value<object> & Validatable>) => MessageT);
    validate<Argument extends object>(value: Argument): EmptyValidatable<Argument, MessageT>;
}
