import Type from "../boolean/type";
import Empty from "../boolean/empty";
import Record from "./record";
import PropertyActual from "../message/string/property-actual";

/**
 * helper return type
 */
export type Return<Value, Replace, Container extends Record<Value>> = {
    [Key in keyof Container]: Container[Key] extends Record<Value> ? Return<Value, Replace, Container[Key]>  : Replace
}


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
export default function Map<Value, Replace, Container extends Record<Value>>(
    object : Container,
    validation : (value : any) => value is Value,
    replace : (value : Value) => Replace
) : Return<Value, Replace , Container> {


    let result : Record<Replace> = {};

    for(let property in object) {

        const value = object[property];

        if(validation(value)) {

            result[property] = replace(value);

        } else if(Type(value)) {

            const val = Map(<Record<Value>>value, validation, replace);

            if(!Empty(val)) {

                result[property] = val;
            }

        } else {

            throw new Error(PropertyActual(property, 'valid against validation', result[property] + ''))
        }
    }

    return <Return<Value, Replace, Container>> result;
}

