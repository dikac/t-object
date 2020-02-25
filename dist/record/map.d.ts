import Record from "./record";
import Convert from "./convert";
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
export default function Map<Value, Replace, Container extends Record<Value>>(object: Container, validation: (value: any) => value is Value, replace: (value: Value) => Replace): Convert<Value, Replace, Container>;
