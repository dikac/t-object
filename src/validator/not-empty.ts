import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/return/return";

export default class NotEmpty<MessageT>
    implements
        Validator<object, object, NotEmptyValidatable<MessageT>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<Argument extends object>(value: object): Return<object, Argument, object, NotEmptyValidatable<MessageT>> {

        return <Return<object, Argument, object,  NotEmptyValidatable<MessageT>>> new NotEmptyValidatable(value, this.message);
    }
}
