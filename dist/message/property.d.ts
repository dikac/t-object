import Message from "@dikac/t-message/message";
import Fn from "@dikac/t-function/function-single";
export default function Property<MessageValue>(message: Message<MessageValue>, property: PropertyKey, delimiter?: string, conversion?: Fn<MessageValue, string>): Message<string>;
