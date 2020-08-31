import Name from "../../string/name";
import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    {
        invalid:'is not',
        valid:'is',
    }, 'empty object'
);

/**
 * string intended for not empty object
 *
 * @param valid
 * @param value
 */

export default function NotEmpty(valid : boolean, value : object) : string {

    sentence.subject = '"' + Name(value) + '"';
    sentence.valid = valid;
    return sentence.message;
}
