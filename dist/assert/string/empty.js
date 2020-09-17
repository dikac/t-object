import Name from "../../string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function Empty(valid, value, subject = '') {
    const sentence = SentencesMust(valid);
    sentence.subject.push(subject);
    sentence.subject.push(`"${Name(value)}"`);
    sentence.expect = ['empty object'];
    return sentence.message;
}
//# sourceMappingURL=empty.js.map