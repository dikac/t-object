import Message from "@dikac/t-message/message";

export default function Property<MessageValue>(
    message : Message<MessageValue>,
    property : PropertyKey,
    delimiter : string = ' : ',
    conversion : (message:MessageValue)=>string = (value: MessageValue) => value + ''
) : Message<string> {

    let string = property.toString() + delimiter + conversion(message.message)

    return {message:string};
}
