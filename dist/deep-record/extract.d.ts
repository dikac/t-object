import DeepRecord from "./deep-record";
export declare type Return<Replace, Type, Container extends DeepRecord<Type>> = {
    [Key in keyof Container]: Container[Key] extends DeepRecord<Type> ? Return<Replace, Type, Container[Key]> : Replace;
};
export default function Extract<Value, Key extends keyof Value, Container extends DeepRecord<Value>>(object: Container, property: Key): Return<Value[Key], Value, Container>;
