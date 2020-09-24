import Callback from "@dikac/t-validator/validatable/callback-function";
import ObjectGuard from "../boolean/object";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function Object_<MessageType, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
) : Return<any, Argument, object, Readonly<Instance<any, MessageType>>> {

    return <Return<any, Argument, object, Readonly<Instance<any, MessageType>>>> Callback(value, ObjectGuard, message);
}
