import { Object } from "ts-toolbelt";
import Function from "@dikac/t-function/function";
export default function FilterRecursive<O extends object = object>(record: O, validation: Function<[any], boolean>): Object.Partial<O, 'deep'>;
