import Record from "../../../record/record";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/infer/message";

type Return<Schema extends Record<PropertyKey, Message<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends Record<PropertyKey, Message<any>> ? Return<Schema[Key]> : InferMessage<Schema[Key]>
};


export default Return;
