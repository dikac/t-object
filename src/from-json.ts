export default function FromJson<Type>(
    json : string,
    validator : (object : any) => object is Type
) : Type {

    let object = JSON.parse(json);

    if(validator(object)) {

        return object;
    }

    throw new TypeError('json string is not valid according to validator');
}