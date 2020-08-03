import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import NotEmptyArgument from "../boolean/not-empty";

export default class NotEmpty<MessageT>
    implements
        Readonly<Value<object> & Message<MessageT> & Validatable>

{
    readonly valid : boolean;

    constructor(
        readonly value : object,
        private _message : Function<[Readonly<Value<object> & Validatable>], MessageT>,
    ) {

        this.valid = NotEmptyArgument(value);
    }

    get message() : MessageT {

        return this._message(this);
    }
}

