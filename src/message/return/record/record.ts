import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/message";

type Record<Schema extends globalThis.Record<PropertyKey, Message<unknown>>> = {
    [Key in keyof Schema] : InferMessage<Schema[Key]>
};


export default Record;
