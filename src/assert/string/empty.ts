import Name from "../../string/name";
import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    {
        valid : 'is',
        invalid : 'is not',
    }, 'empty object'
);

/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 */

export default function Empty(valid : boolean, value : object) : string {

    sentence.subject = '"' + Name(value) + '"';
    sentence.valid = valid;
    return sentence.message;
}
