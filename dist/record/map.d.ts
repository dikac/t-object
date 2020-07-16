import Record from "./record";
/**
 * Convert recursive {@template Container} Value type to {@template Replace} type
 *
 * {@template Value} is required, while {@tempalte Key} is optional to use for distinguish condition recursive {@template Container}
 */
declare type Map<Replace, Value, Key extends keyof any = keyof any, Container extends Record<Key, Value> = Record<Key, Value>> = {
    [K in keyof Container]: Container[K] extends Record<Key, Value> ? Map<Replace, Value, Key, Container[K]> : Replace;
};
export default Map;
