import Sentences from "@dikac/t-string/message/sentences";
import Name from "../../string/name";

export default function Sentence<ObjectType extends object>(
    valid : boolean,
    target : ObjectType,
    property : keyof ObjectType,
    predicate : {invalid: string[], valid: string[]},
    object : string[]
) : Sentences {

    let sentence = new Sentences(valid);
    sentence.subject = [Name(target) + '.' + property.toLocaleString()];
    sentence.predicate = predicate;
    sentence.object = object;
    return sentence;
}
