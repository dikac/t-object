import { O } from "ts-toolbelt";
/**
 * filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 *
 */
export default function Filter<Type extends O.UnionOf<Object>, Object extends Record<PropertyKey, any>>(record: Object, filter: (value: O.UnionOf<Object>, key: keyof Object) => value is Type): O.Select<Object, Type>;
export default function Filter<Object extends Record<PropertyKey, unknown>>(record: Object, filter: (value: O.UnionOf<Object>, key: keyof Object) => boolean): Partial<Object>;
