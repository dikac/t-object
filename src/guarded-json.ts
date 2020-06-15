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
    validator : (object : any) => object is Type,
    error : (json : string, object : object) => Error = (json : string, object : object) => new TypeError('json string is not valid according to validator'),
    preprocess : (object:{[Key in keyof Type] : Type[Key]}) => void = () => {}
) : Type {

    let string = json.toString();
    let object = JSON.parse(string);
    preprocess(object);

    if(validator(object)) {

        return object;
    }

    throw error(string, object);
}


