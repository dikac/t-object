import Name from "../../string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";

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

    const sentence = SentencesMust(valid);

    sentence.subject.push(subject);
    sentence.subject.push(`"${Name(value)}"`);
    sentence.expect = ['empty object'];
    return sentence.message;
}
