import TypeObject from "../../../boolean/type";
import RecordInterface from "../record";
import PropertyType from "../../../key/boolean/type";

/**
 * Check if {@param record} is {@link RecordInterface} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 * optionally {@param prop} use to validate object property
 */
export default function Type<
    Value,
    Assumption extends RecordInterface<keyof any, Value>,
    Key extends string|number|symbol = string|number|symbol
>(
    record : any,
    validation : (value : any) => value is Value,
    prop : (value : string|number|symbol) => value is Key = PropertyType,
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

            if(Type(value, validation, prop)) {

                continue;
            }
        }

        return false;
    }

    return true;
}
