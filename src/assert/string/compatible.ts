import SentencesMust from "@dikac/t-string/message/sentences-must";

export default function Compatible(
    valid : boolean,
    value : unknown,
    expect : string,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect = ['compatible with', expect];
    sentence.subject.push(subject);

    sentence.comma.push('expect');


    if(!valid) {

        sentence.actual.push('actual', conversion(value));
    }

    return sentence.message;
}
