import Sentence from "../../../dist/property/message/sentence";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let sentence = Sentence(false, new Array(), 'length', ['is'], ['is not'], ['number']);

it('valid', ()=>{

    sentence.valid = true;
    expect(sentence.message).toBe('Array.length is number.');
})

it('invalid', ()=>{

    sentence.valid = false;
    expect(sentence.message).toBe('Array.length is not number.');
})



