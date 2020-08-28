import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default class Empty<Type extends object, MessageT> implements Readonly<Value<Type> & Message<MessageT> & Validatable> {
    readonly value: Type;
    private _message;
    readonly valid: boolean;
    constructor(value: Type, _message: (result: Readonly<Value<Type> & Validatable>) => MessageT);
    get message(): MessageT;
}
