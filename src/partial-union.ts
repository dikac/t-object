import {Object} from "ts-toolbelt";

/**
 * similar to {@link globalThis.Record} but with recursive support
 */
type PartialUnion<Schema extends Record<any, unknown>> =
    Partial<Schema> |
    Record<keyof Schema, Object.UnionOf<Schema>> |
    Schema
;

export default PartialUnion;



