import Recursive from "../recursive";

type Value<Value> = Value extends Recursive<any, infer As> ? As : never;

export default Value;

// /**
//  * Convert recursive {@template Container} Value type to {@template Replace} type
//  *
//  * {@template Value} is required, while {@tempalte Key} is optional to use for distinguish condition recursive {@template Container}
//  */
// type Value<Replace, Value, Key extends PropertyKey = PropertyKey, Container extends Recursive<Key, Value> = Recursive<Key, Value>> = {
//     [K in keyof Container]: Container[K] extends Recursive<Key, Value> ? Map<Replace, Value, Key, Container[K]>  : Replace
// }
//
// export default Value;
