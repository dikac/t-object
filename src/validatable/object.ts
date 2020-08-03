import Callback from "@dikac/t-value/message/callback";
import ObjectGuard from "../boolean/object";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";

export default function Object_<MessageT, Argument>(
    value : Argument,
    message : Function<[Readonly<Value<Argument> & Validatable>], MessageT>
) : Return<any, Argument, object, Readonly<Instance<any, MessageT>>> {

    return <Return<any, Argument, object, Readonly<Instance<any, MessageT>>>> Callback(value, ObjectGuard, message);
}
