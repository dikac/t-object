import StringType from "../string/object";

export default function Object(
    string : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : Error {

    return new Error(StringType(false, string, subject, conversion))
}
