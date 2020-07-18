import Callback from "@dikac/t-value/message/callback";
import ObjectGuard from "../boolean/object";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

type Return<Msg, Argument> = Readonly<Validatable<false> & Message<Msg> & Value<Argument>> | Readonly<Validatable<true> & Message<Msg> & Value<object>>;

export default function Object_<Msg, Argument>(
    value : Argument,
    message : Function<[Readonly<Value<Argument> & Validatable>], Msg>
) : Return<Msg, Argument> {

    return <Return<Msg, Argument>> Callback(value, ObjectGuard, message);
}
