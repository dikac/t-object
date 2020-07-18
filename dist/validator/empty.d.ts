import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
export default class Empty<Msg> implements Validator<object, Readonly<Validatable<boolean> & Message<Msg> & Value<object>>>, Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>> {
    empty: boolean;
    message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>;
    constructor(empty: boolean, message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>);
    validate(value: object): Readonly<Validatable<boolean> & Message<Msg> & Value<object>>;
}
