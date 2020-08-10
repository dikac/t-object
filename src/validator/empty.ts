import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";

export default class Empty<MessageT>
    implements
        Validator<object, object, boolean, boolean, EmptyValidatable<object, MessageT>>,
        Message<Function<[Readonly<Value<object> & Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value<object> & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends object>(value: Argument) : EmptyValidatable<Argument, MessageT>   {

        return new EmptyValidatable<Argument, MessageT>(value, this.message);
    }
}
