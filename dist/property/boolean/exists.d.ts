import { Required } from "utility-types";
/**
 * check if property exists
 */
export default function Exists<ObjectT extends object, Key extends keyof ObjectT>(object: ObjectT, property: Key): object is (Key extends keyof ObjectT ? Required<ObjectT, Key> : ObjectT);
export default function Exists<ObjectT extends object, Key extends PropertyKey>(object: ObjectT, property: Key): object is ObjectT & Record<Key, any>;