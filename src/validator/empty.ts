import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";

export default class Empty<Msg>
    implements
        Validator<object, object, Instance<object, Msg>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate<Argument extends object>(value: Argument): Return<object, Argument, object, Readonly<Instance<object, Msg>>> {

        return <Return<object, Argument, object, Readonly<Instance<object, Msg>>>> new EmptyValidatable(value, this.message);
    }
}
