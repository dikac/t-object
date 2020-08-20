import {Object} from "ts-toolbelt";

/**
 * remove undefined from {@param object}
 * @param object
 */
export default function OmitUndefined<O extends object>(
    object : O,
)  : Omit<O, Object.Keys<Object.Select<O, undefined>>> {

    for(let property in object) {

        if(object[property] === undefined) {

            delete object[property];
        }
    }

    return object;
}
