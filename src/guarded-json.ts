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
export default function GuardedJson<Type>(
    json : {toString:()=>string}|string,
    validator : Guard<any, Type>,
    error : Fn<[string, object], Error> = (json : string, object : object) => new TypeError('json string is not valid according to validator'),
    preprocess : Fn<[{[Key in keyof Type] : Type[Key]}], void> = () => {}
) : Type {

    let string = json.toString();
    let object = JSON.parse(string);
    preprocess(object);

    if(validator(object)) {

        return object;
    }

    throw error(string, object);
}
