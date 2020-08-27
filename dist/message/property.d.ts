import Message from "@dikac/t-message/message";
export default function Property<MessageValue>(message: Message<MessageValue>, property: PropertyKey, delimiter?: string, conversion?: (message: MessageValue) => string): Message<string>;
