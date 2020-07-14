import Fn from "@dikac/t-function/function";

/**
 * filter {@param object} value, returning new object with all value allowed
 * by {@param validation} with the same property
 */
export default function Filter<
    Object extends object = object
>(
    object : Object,
    validation : Fn<[any], boolean>,
) : Partial<Object> {

    let result : Partial<Object> = {};

    for(let property in object) {

        const value : any = object[property];

        if(validation(value)) {

            result[property] = value;
        }
    }

    return  result;
}
