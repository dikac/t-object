import SentencesIs from "@dikac/t-string/message/sentences-is";


export default function Object_(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = new SentencesIs(valid);
    sentence.type.push('object');
    sentence.value.push(subject);

    if(!valid) {

        sentence.value.push(conversion(value));
    }

    return sentence.message;
}
