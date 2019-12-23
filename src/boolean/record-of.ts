// TODO ADD TYPE
export default function RecordOf<O extends object, Value>(
    value : object,
    validator : (value : any) => value is Value
) : boolean  {

    for(let property in value) {

        if(!validator(value[property])) {

            return false;
        }
    }

    return true;
}