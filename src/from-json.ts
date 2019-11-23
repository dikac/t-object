export default function FromJson<Type>(
    json : {toString:()=>string},
    validator : (object : any) => object is Type,
    error : (json : string, object : object) => Error = (json : string, object : object) => new TypeError('json string is not valid according to validator'),
    preprocess : (object:object) => any
) : Type {

    let string = json.toString();
    let object = preprocess(JSON.parse(string));

    if(validator(object)) {

        return object;
    }

    throw error(string, object);
}