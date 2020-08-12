import Message from "@dikac/t-message/message";
export default interface Messages<Object extends Record<PropertyKey, Message> = Record<PropertyKey, Message>> {
    messages: Object;
}
