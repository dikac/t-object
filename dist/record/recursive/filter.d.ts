import { DeepPartial } from "utility-types";
import Record from "./record";
import Value from "../infer/value";
/**
 * recursively filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 */
export default function Filter<Object extends Record<any, any>>(record: Object, filter: (val: Value<Object>) => boolean): DeepPartial<Object>;
