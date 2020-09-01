import Name from "../../string/name";
import SentencesIs from "@dikac/t-string/message/sentences-is";


/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function Empty(
    valid : boolean,
    value : object,
    subject : string = '',
) : string {

    const sentence = new SentencesIs(valid);

    sentence.value.push(subject);
    sentence.value.push(Name(value));
    sentence.type = ['empty object'];
    return sentence.message;
}
