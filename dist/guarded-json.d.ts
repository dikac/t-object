import Guard from "@dikac/t-function/boolean/guard";
import Fn from "@dikac/t-function/function";
/**
 * Parse json string to object and check for certain type according to {@param validator}
 * @param json
 * @param validator
 * @param error
 * @param preprocess
 * @constructor
 */
export default function GuardedJson<Type>(json: {
    toString: () => string;
} | string, validator: Guard<unknown, Type>, error?: Fn<[string, object], Error>, preprocess?: Fn<[{
    [Key in keyof Type]: Type[Key];
}], void>): Type;
