import Sentences from "@dikac/t-string/message/sentences";
export default function NameNotFound(valid, value, subject = 'type', conversion = value => typeof value) {
    let sentence = new Sentences(valid);
    sentence.accept = ['have'];
    sentence.reject = ['does not have'];
    sentence.subject.push(subject);
    sentence.expect.push('prototype name');
    if (!valid) {
        sentence.subject.push(conversion(value));
    }
    return sentence.message;
}
//# sourceMappingURL=name-not-found.js.map