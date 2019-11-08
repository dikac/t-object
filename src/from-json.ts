export default function FromJson<Type>(
    json : {toString:()=>string},
    validator : (object : any) => object is Type
) : Type {

    let object = JSON.parse(json.toString());

    if(validator(object)) {

        return object;
    }

    throw new TypeError('json string is not valid according to validator');
}