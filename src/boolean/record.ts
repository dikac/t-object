import RecordInterface from "../record/record";
import TypeObject from "../boolean/type";


export default function Record<Value>(record : any, validation : (value : any) => value is Value) : record is RecordInterface<Value> {

    if(!TypeObject(record)) {

        return false;
    }

    for(let property in record) {

        const value = record[property];

        if(validation(value)) {

           continue;
        }

        if(TypeObject(value)) {

            if(Record(value, validation)) {

                continue;
            }
        }

        return false;
    }

    return true;
}
