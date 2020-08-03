import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
export default class Empty<MessageT> implements Readonly<Value<object> & Message<MessageT> & Validatable> {
    readonly value: object;
    private _message;
    readonly valid: boolean;
    constructor(value: object, _message: Function<[Readonly<Value<object> & Validatable>], MessageT>);
    get message(): MessageT;
}
