import TypeObject from "../../boolean/object";
import RecordInterface from "../record";
import PropertyType from "../../key/boolean/key";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is {@link RecordInterface} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 * optionally {@param prop} use to validate object property
 */
export default function Record<
    Value,
    Assumption extends RecordInterface<PropertyKey, Value>,
    Key extends string|number|symbol = string|number|symbol
>(
    record : any,
    validation : Guard<any,  Value>,
    prop : Guard<string|number|symbol,  Key> = PropertyType,
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

            if(Record(value, validation, prop)) {

                continue;
            }
        }

        return false;
    }

    return true;
}
