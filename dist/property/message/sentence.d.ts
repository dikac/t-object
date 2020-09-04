import Sentences from "@dikac/t-string/message/sentences";
export default function Sentence<ObjectType extends object>(valid: boolean, target: ObjectType, property: keyof ObjectType, predicate: {
    invalid: string[];
    valid: string[];
}, object: string[]): Sentences;
