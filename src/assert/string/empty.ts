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

    const sentence = SentencesIs(valid);

    sentence.subject.push(subject);
    sentence.subject.push(Name(value));
    sentence.object = ['empty object'];
    return sentence.message;
}
