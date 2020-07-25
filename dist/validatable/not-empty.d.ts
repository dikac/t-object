import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
export default class NotEmpty<Msg> implements Readonly<Value<object> & Message<Msg> & Validatable> {
    readonly value: object;
    private _message;
    readonly valid: boolean;
    constructor(value: object, _message: Function<[Readonly<Value<object> & Validatable>], Msg>);
    get message(): Msg;
}
