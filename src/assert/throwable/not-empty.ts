import NotEmptyType from "../string/not-empty";

export default function NotEmpty(
    string : object,
    subject : string = 'object'
) : Error {

    return new Error(NotEmptyType(false, string, subject))
}
