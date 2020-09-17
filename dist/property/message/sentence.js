import Sentences from "@dikac/t-string/message/sentences";
import Name from "../../string/name";
export default function Sentence(valid, target, property, accept, reject, object) {
    let sentence = new Sentences(valid);
    sentence.subject = [Name(target) + '.' + property.toLocaleString()];
    sentence.accept = accept;
    sentence.reject = reject;
    sentence.expect = object;
    return sentence;
}
//# sourceMappingURL=sentence.js.map