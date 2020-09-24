import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Return from "@dikac/t-validator/validatable/simple";
export default class NotEmpty<MessageType> implements Validator<object, object, boolean, boolean, NotEmptyValidatable<object, MessageType>>, Message<(result: Readonly<Value & Validatable>) => MessageType> {
    message: (result: Readonly<Value<object> & Validatable>) => MessageType;
    constructor(message: (result: Readonly<Value<object> & Validatable>) => MessageType);
    validate<Argument extends object>(value: Argument): Return<object, Argument, object, NotEmptyValidatable<Argument, MessageType>>;
}
