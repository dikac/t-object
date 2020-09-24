import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";

export default class Empty<MessageType>
    implements
        Validator<object, object, boolean, boolean, EmptyValidatable<object, MessageType>>,
        Message<(result:Readonly<Value<object> & Validatable>)=>MessageType>
{

    constructor(
       public message : (result:Readonly<Value<object> & Validatable>)=>MessageType
    ) {
    }

    validate<Argument extends object>(value: Argument) : EmptyValidatable<Argument, MessageType>   {

        return new EmptyValidatable<Argument, MessageType>(value, this.message);
    }
}
