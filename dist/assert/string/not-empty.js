import Name from "../../string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";
/**
 * string intended for not empty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function NotEmpty(valid, value, subject = '') {
    const sentence = SentencesMust(valid);
    sentence.accept = ['is not'];
    sentence.reject = ['must not'];
    sentence.subject.push(subject);
    sentence.subject.push(Name(value));
    sentence.expect = ['empty object'];
    return sentence.message;
}
//# sourceMappingURL=not-empty.js.map