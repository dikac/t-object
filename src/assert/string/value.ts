import Sentence from "@dikac/t-string/message/sentence";
/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export default function Value(
    valid : boolean,
    property : PropertyKey,
    type : string
) : string {

    const sentence = new Sentence(valid);

    sentence.reject = 'value is not';
    sentence.accept = 'value is';


    sentence.subject = property.toString();
    sentence.expect = type;

    return sentence.message;
}
