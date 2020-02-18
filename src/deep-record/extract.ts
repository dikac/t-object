import Type from "../boolean/type";
import Empty from "../boolean/empty";
import DeepRecord from "./deep-record";

/**
 * helper return type
 */
export type Return<Replace, Type, Container extends DeepRecord<Type>> = {
    [Key in keyof Container]: Container[Key] extends DeepRecord<Type> ? Return<Replace, Type, Container[Key]>  : Replace
}


/**
 * get all {@link DeepRecord} value property and construct with the same structure with original
 *
 * @template Value - value for {@link DeepRecord}
 * @template Container - object compatible with {@link DeepRecord}
 * @template Key - property from {Value} to be extracted
 *
 * @param object - source, and structure
 * @param property - property to be extracted
 * @return value from {@link DeepRecord}
 */

export default function Extract<Value, Key extends keyof Value, Container extends DeepRecord<Value>>(object : Container, property : Key) : Return<Value[Key], Value, Container> {


    let result : DeepRecord<Value[Key]> = {};

    for(let prop in object) {

        const value = object[prop];

        if(property in value) {

            // @ts-ignore
            result[prop] = value[property];

        } else if(Type(value)) {

            // @ts-ignore
            const val = Extract(value, property);

            if(!Empty(val)) {

                result[prop] = val;
            }

        } else {

            throw new Error(`property ${property} is not exists in given object`)
        }
    }

    return <Return<Value[Key], Value, Container>> result;
}
