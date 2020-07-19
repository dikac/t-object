import TypeObject from "../../boolean/object";
import RecordInterface from "../recursive";
import PropertyType from "../../key/boolean/key";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is {@link Recursive} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 * optionally {@param prop} use to validate object property
 */
export default function Recursive<
    Value,
    Assumption extends RecordInterface<PropertyKey, Value>,
    Key extends PropertyKey = PropertyKey
>(
    record : any,
    validation : Guard<any,  Value>,
    prop : Guard<PropertyKey,  Key> = PropertyType,
) : record is Assumption {

    if(!TypeObject(record)) {

        return false;
    }

    for(let property in record) {

        if(!prop(property)) {

            return false;
        }

        // @ts-ignore
        const value = record[property];

        if(validation(value)) {

           continue;
        }

        if(TypeObject(value)) {

            if(Recursive(value, validation, prop)) {

                continue;
            }
        }

        return false;
    }

    return true;
}