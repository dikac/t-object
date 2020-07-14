import Fn from "@dikac/t-function/function";
/**
 * filter {@param object} value, returning new object with all value allowed
 * by {@param validation} with the same property
 */
export default function Filter<Object extends object = object>(object: Object, validation: Fn<[any], boolean>): Partial<Object>;
