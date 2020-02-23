import Record from "./record";
/**
 * helper return type
 */
export declare type Return<Value, Replace, Container extends Record<Value>> = {
    [Key in keyof Container]: Container[Key] extends Record<Value> ? Return<Value, Replace, Container[Key]> : Replace;
};
/**
 * get all {@link Record} value property and construct with the same structure with original
 *
 * @template Value - value for {@link Record}
 * @template Container - object compatible with {@link Record}
 * @template Replace - new value to be used to replace {@link Value}
 *
 * @param object
 * @param validation
 * @param replace
 */
export default function Map<Value, Replace, Container extends Record<Value>>(object: Container, validation: (value: any) => value is Value, replace: (value: Value) => Replace): Return<Value, Replace, Container>;
