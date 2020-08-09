import { O } from "ts-toolbelt";
import Fn from "@dikac/t-function/function";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * recursively filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 *
 * {@param validation} is used to distinguish between value to be validated by {@param filter} or tobe called
 * recursively
 */
export default function Filter<Type extends O.UnionOf<Object>, Object extends Record<keyof Object, any>>(record: Object, filter: Guard<O.UnionOf<Object>, Type, [keyof Object]>): O.Select<Object, Type>;
export default function Filter<Object extends Record<keyof Object, unknown>>(record: Object, filter: Fn<[O.UnionOf<Object>, keyof Object], boolean>): Partial<Object>;
