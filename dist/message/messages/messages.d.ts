import Message from "@dikac/t-message/message";
export default interface Messages<Object extends Record<any, Message> = Record<any, Message>> {
    messages: Object;
}
