import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyArgument from "../boolean/not-empty";

export default class NotEmpty<ValueType extends object, MessageType>
    implements
        Readonly<Value<ValueType> & Message<MessageType> & Validatable>
{
    readonly valid : boolean;

    constructor(
        readonly value : ValueType,
        private _message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
    ) {

        this.valid = NotEmptyArgument(value);
    }

    get message() : MessageType {

        return this._message(this);
    }
}

