/**
 * filter {@param object} value, returning new object with all value allowed
 * by {@param validation} with the same property
 */
export default function Filter<Object extends object = object>(object: Object, validation: (val: any) => boolean): Partial<Object>;
