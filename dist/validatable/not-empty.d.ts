import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
export default class NotEmpty<ValueT extends object, MessageT> implements Readonly<Value<ValueT> & Message<MessageT> & Validatable> {
    readonly value: ValueT;
    private _message;
    readonly valid: boolean;
    constructor(value: ValueT, _message: Function<[Readonly<Value<ValueT> & Validatable>], MessageT>);
    get message(): MessageT;
}
