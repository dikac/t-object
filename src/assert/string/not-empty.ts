import Name from "../../string/name";
import SentencesIs from "@dikac/t-string/message/sentences-is";

/**
 * string intended for not empty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function NotEmpty(valid : boolean, value : object, subject : string = '') : string {

    const sentence = SentencesIs(valid);

    sentence.predicate = {
        invalid:['is not'],
        valid:['is'],
    };

    sentence.subject.push(subject);
    sentence.subject.push(Name(value));
    sentence.object = ['empty object'];

    return sentence.message;
}
