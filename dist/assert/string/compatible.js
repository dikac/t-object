import SentencesMust from "@dikac/t-string/message/sentences-must";
export default function Compatible(valid, value, expect, subject = 'type', conversion = value => typeof value) {
    let sentence = SentencesMust(valid);
    sentence.expect = ['compatible with', expect];
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', conversion(value));
    }
    return sentence.message;
}
//# sourceMappingURL=compatible.js.map