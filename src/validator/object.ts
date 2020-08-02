import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ObjectValidatable from "../validatable/object";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/parameter/instance/instance";
import Return from "@dikac/t-validator/return/return";

export default class Object_<Msg>
    implements
        Validator<any, object, Readonly<Instance<object, Msg>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate<Argument extends any>(value: Argument): Return<any, Argument, object, Readonly<Instance<object, Msg>>> {

        return  ObjectValidatable<Msg, Argument>(value, this.message);
    }
}
