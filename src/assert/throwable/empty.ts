import EmptyType from "../string/empty";

export default function Empty(
    string : object,
    subject : string = 'object'
) : Error {

    return new Error(EmptyType(false, string, subject))
}
