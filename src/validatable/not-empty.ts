import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import NotEmptyArgument from "../boolean/not-empty";

export default class NotEmpty<Msg>
    implements
        Readonly<Value<object> & Message<Msg> & Validatable>

{
    readonly valid : boolean;

    constructor(
        readonly value : object,
        private _message : Function<[Readonly<Value<object> & Validatable>], Msg>,
    ) {

        this.valid = NotEmptyArgument(value);
    }

    get message() : Msg {

        return this._message(this);
    }
}

