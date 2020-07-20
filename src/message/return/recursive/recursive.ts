import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/return/return";

type Recursive<Schema extends Record<PropertyKey, Message<unknown>>> = {
    [Key in keyof Schema] : InferMessage<Schema[Key]>
};


export default Recursive;
