import Sentence from "@dikac/t-message/sentence";
import Name from "../../string/name";

const sentence = new Sentence(
    false,
    '',
    {
        invalid:'is not',
        valid:'is',
    }, 'object'
);

export default function Object_(
    valid : boolean,
    subject : string = ''
) : string {

    sentence.subject = subject;
    sentence.valid = valid;
    return sentence.message;
}
