import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import EmptyArgument from "../boolean/empty";

export default class Empty<Msg>
    implements
        Readonly<Value<object> & Message<Msg> & Validatable>

{
    readonly valid : boolean;

    constructor(
        readonly value : object,
        private _message : Function<[Readonly<Value<object> & Validatable>], Msg>,
    ) {

        this.valid = EmptyArgument(value);
    }

    get message() : Msg {

        return this._message(this);
    }
}

