import ObjectFilter from "../filter";
import Value from "./infer/value";

/**
 * Add {@link Record} type to {@link ObjectFilter}
 */

export default function Filter<
    O extends Record<keyof any, any>
>(
    record : O,
    filter : (val : Value<O>) => boolean,
) : Partial<O> {

    return ObjectFilter(record, filter);
}
