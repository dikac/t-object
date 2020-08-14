import { O } from "ts-toolbelt";
import Fn from "@dikac/t-function/function";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 *
 */
export default function Filter<Type extends O.UnionOf<Object>, Object extends Record<PropertyKey, any>>(record: Object, filter: Guard<O.UnionOf<Object>, Type, [keyof Object]>): O.Select<Object, Type>;
export default function Filter<Object extends Record<PropertyKey, unknown>>(record: Object, filter: Fn<[O.UnionOf<Object>, keyof Object], boolean>): Partial<Object>;
