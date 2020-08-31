import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    {
        invalid:'value is not',
        valid:'value is',
    }, ''
);

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

    sentence.subject = property.toString();
    sentence.object = type;
    sentence.valid = valid;

    return sentence.message;
}
