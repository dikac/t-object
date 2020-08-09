import {Object} from "ts-toolbelt";


type Union<Schema extends Record<keyof Schema, unknown>> =
    Record<keyof Schema, Object.UnionOf<Schema>> |
    Schema
;

export default Union;



