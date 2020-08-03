import {Object} from "ts-toolbelt";

type PartialUnion<Schema extends Record<any, unknown>> =
    Partial<Schema> |
    Record<keyof Schema, Object.UnionOf<Schema>> |
    Schema
;

export default PartialUnion;



