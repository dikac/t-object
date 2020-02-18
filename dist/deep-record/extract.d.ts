import DeepRecord from "./deep-record";
/**
 * helper return type
 */
export declare type Return<Replace, Type, Container extends DeepRecord<Type>> = {
    [Key in keyof Container]: Container[Key] extends DeepRecord<Type> ? Return<Replace, Type, Container[Key]> : Replace;
};
/**
 * get all {@link DeepRecord} value property and construct with the same structure with original
 *
 * @template Value - value for {@link DeepRecord}
 * @template Container - object compatible with {@link DeepRecord}
 * @template Key - property from {Value} to be extracted
 *
 * @param object - source, and structure
 * @param property - property to be extracted
 * @return value from {@link DeepRecord}
 */
export default function Extract<Value, Key extends keyof Value, Container extends DeepRecord<Value>>(object: Container, property: Key): Return<Value[Key], Value, Container>;
