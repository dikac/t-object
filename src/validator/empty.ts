import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/return/return";

export default class Empty<MessageT>
    implements
        Validator<object, object, EmptyValidatable<MessageT>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<Argument extends object>(value: Argument): Return<object, Argument, object, EmptyValidatable<MessageT>> {

        return <Return<object, Argument, object, EmptyValidatable<MessageT>>> new EmptyValidatable(value, this.message);
    }
}
