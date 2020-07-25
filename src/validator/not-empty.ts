import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Function from "@dikac/t-function/function";

export default class NotEmpty<Msg>
    implements
        Validator<object, Readonly<Validatable<boolean> & Message<Msg> & Value<object>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: object): Readonly<Validatable<boolean> & Message<Msg> & Value<object>> {

        return new NotEmptyValidatable(value, this.message);
    }
}
