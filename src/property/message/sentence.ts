import Sentences from "@dikac/t-string/message/sentences";
import Name from "../../string/name";

export default function Sentence<ObjectType extends object>(
    valid : boolean,
    target : ObjectType,
    property : keyof ObjectType,
    accept : string[],
    reject : string[],
    object : string[]
) : Sentences {

    let sentence = new Sentences(valid);

    sentence.subject = [Name(target) + '.' + property.toLocaleString()];

    sentence.accept = accept;
    sentence.reject = reject;

    sentence.expect = object;

    return sentence;
}
