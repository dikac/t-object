import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Return from "@dikac/t-validator/validatable/simple";

export default class NotEmpty<MessageT>
    implements
        Validator<object, object, boolean, boolean, NotEmptyValidatable<object, MessageT>>,
        Message<(result:Readonly<Value & Validatable>)=>MessageT>
{

    constructor(
       public message : (result:Readonly<Value<object> & Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends object>(value: Argument): Return<object, Argument, object, NotEmptyValidatable<Argument, MessageT>> {

        return <Return<object, Argument, object,  NotEmptyValidatable<Argument, MessageT>>> new NotEmptyValidatable<Argument, MessageT>(value, this.message);
    }
}
