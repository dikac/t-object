import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function-single";

export default function PrependProperties<MessageValue>(
    message : Message<MessageValue>,
    properties : PropertyKey[],
    delimiter : string = ' : ',
    conversion : Fn<MessageValue, string> = (value: any) => value.toString()
) : Message<string> {

    let string = properties.join('.') + delimiter + conversion(message.message)

    return {message:string};
}
