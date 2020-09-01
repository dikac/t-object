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

    const sentence = new SentencesIs(valid,);

    sentence.expectation = {
        invalid:['is not'],
        valid:['is'],
    };

    sentence.value.push(subject);
    sentence.value.push(Name(value));
    sentence.type = ['empty object'];

    return sentence.message;
}
