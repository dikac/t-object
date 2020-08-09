import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ObjectValidatable from "../validatable/object";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/instance";
import Return from "@dikac/t-validator/validatable/simple";

export default class Object_<MessageT>
    implements
        Validator<any, object, Readonly<Instance<object, MessageT>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], MessageT>>
{
    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<Argument extends any>(value: Argument): Return<any, Argument, object, Readonly<Instance<object, MessageT>>> {

        return  ObjectValidatable<MessageT, Argument>(value, this.message);
    }
}
