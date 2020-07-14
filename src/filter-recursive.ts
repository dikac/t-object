import ObjectGuard from "./boolean/object";
import {Object} from "ts-toolbelt";
import Function from "@dikac/t-function/function";

export default function FilterRecursive<
    O extends object = object
    >(
    record : O,
    validation : Function<[any], boolean>,
) : Object.Partial<O, 'deep'> {

    let result : Object.Partial<O, 'deep'> = <Object.Partial<O, 'deep'>>{};

    for(let property in record) {

        const value  = record[property];

         if(validation(value)) {

            // @ts-ignore
            result[property] = value;

        } else if(ObjectGuard(value)) {

             // @ts-ignore
             result[property] = FilterRecursive(value, validation);

         }
    }

    return  result;
}


