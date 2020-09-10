import Name from "../../string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";

/**
 * string intended for not empty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function NotEmpty(valid : boolean, value : object, subject : string = '') : string {

    const sentence = SentencesMust(valid);

    sentence.accept = ['is'];
    sentence.reject = ['is not'];

    sentence.subject.push(subject);
    sentence.subject.push(Name(value));

    sentence.expect = ['empty object'];

    return sentence.message;
}
