import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function-single";

export default function Property<MessageValue>(
    message : Message<MessageValue>,
    property : PropertyKey,
    delimiter : string = ' : ',
    conversion : Fn<MessageValue, string> = (value: any) => value.toString()
) : Message<string> {

    let string = property.toString() + delimiter + conversion(message.message)

    return {message:string};
}
