import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function-single";
export default function PrependProperties<MessageValue>(message: Message<MessageValue>, properties: PropertyKey[], delimiter?: string, conversion?: Fn<MessageValue, string>): Message<string>;
