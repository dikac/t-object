import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";

export default class Empty<Msg>
    implements
        Validator<object, Readonly<Validatable<boolean> & Message<Msg> & Value<object>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
        public empty : boolean,
       public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: object): Readonly<Validatable<boolean> & Message<Msg> & Value<object>> {

        return new EmptyValidatable(value, this.empty, this.message);
    }
}
