import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/infer";

type InferPartial<Schema extends Partial<Record<PropertyKey, Message>>> = {
    [Key in keyof Schema] : Schema[Key] extends Message ? InferMessage<Schema[Key]> : undefined
};

export default InferPartial;
