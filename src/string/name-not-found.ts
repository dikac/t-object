import Sentences from "@dikac/t-string/message/sentences";

export default function NameNotFound(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = new Sentences(valid);
    sentence.predicate.valid = ['have'];
    sentence.predicate.invalid = ['does not have'];
    sentence.subject.push(subject);

    sentence.object.push('prototype name');

    if(!valid) {

        sentence.subject.push(conversion(value));
    }

    return sentence.message;
}
