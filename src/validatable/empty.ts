import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import EmptyArgument from "../boolean/empty";


export default class Empty<Type extends object, MessageT>
    implements
        Readonly<Value<Type> & Message<MessageT> & Validatable>

{
    readonly valid : boolean;

    constructor(
        readonly value : Type,
        private _message : (result:Readonly<Value<Type> & Validatable>)=>MessageT,
    ) {

        this.valid = EmptyArgument(value);
    }

    get message() : MessageT {

        return this._message(this);
    }
}

