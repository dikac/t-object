import RecursiveObject from "../../../recursive/recursive";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/infer/message";
declare type Recursive<Schema extends RecursiveObject<PropertyKey, Message<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends RecursiveObject<PropertyKey, Message<any>> ? Recursive<Schema[Key]> : InferMessage<Schema[Key]>;
};
export default Recursive;
