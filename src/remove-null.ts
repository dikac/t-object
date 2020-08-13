import {Object} from "ts-toolbelt";

export default function RemoveNull<O extends object>(
    object : O,
)  : Omit<O, Object.Keys<Object.Select<O, null>>> {

    for(let property in object) {

        if(object[property] === null) {

            delete object[property];
        }
    }

    return object;
}
