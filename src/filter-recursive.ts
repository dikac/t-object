import {DeepPartial} from "utility-types";
import Type from "./boolean/type";

export default function FilterRecursive<
    O extends object = object
    >(
    record : O,
    validation : (val : any) => boolean,
) : DeepPartial<O> {

    let result : DeepPartial<O> = <DeepPartial<O>>{};

    for(let property in record) {

        const value  = record[property];

         if(validation(value)) {

            // @ts-ignore
            result[property] = value;

        } else if(Type(value)) {

             // @ts-ignore
             result[property] = FilterRecursive(value, validation);

         }
    }

    return  result;
}
