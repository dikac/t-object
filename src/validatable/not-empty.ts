import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyArgument from "../boolean/not-empty";

export default class NotEmpty<ValueT extends object, MessageT>
    implements
        Readonly<Value<ValueT> & Message<MessageT> & Validatable>
{
    readonly valid : boolean;

    constructor(
        readonly value : ValueT,
        private _message : (result:Readonly<Value<ValueT> & Validatable>)=>MessageT,
    ) {

        this.valid = NotEmptyArgument(value);
    }

    get message() : MessageT {

        return this._message(this);
    }
}

