import Sentences from "@dikac/t-string/message/sentences";
export default function Sentence<ObjectType extends object>(valid: boolean, target: ObjectType, property: keyof ObjectType, accept: string[], reject: string[], object: string[]): Sentences;
