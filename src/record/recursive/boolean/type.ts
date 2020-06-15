import TypeObject from "../../../boolean/type";
import RecordInterface from "../record";

/**
 * Check if {@param record} is {@link RecordInterface} with {@template Value}
 *
 * {@param validation} is use to validate {@template Value}
 */
export default function Type<Value, Assumption extends RecordInterface<keyof any, Value>>(
    record : any,
    validation : (value : any) => value is Value
) : record is Assumption {

    if(!TypeObject(record)) {

        return false;
    }

    for(let property in record) {

        const value = record[property];

        if(validation(value)) {

           continue;
        }

        if(TypeObject(value)) {

            if(Type(value, validation)) {

                continue;
            }
        }

        return false;
    }

    return true;
}
