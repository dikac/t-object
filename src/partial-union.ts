import {Object} from "ts-toolbelt";

type PartialUnion<Schema extends Record<PropertyKey, any>> =
    Partial<Schema> |
    Record<keyof Schema, Object.UnionOf<Schema>> |
    Schema
;

export default PartialUnion;



