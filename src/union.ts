import {Object} from "ts-toolbelt";


type Union<Schema extends Record<PropertyKey, any>> =
    Record<keyof Schema, Object.UnionOf<Schema>> |
    Schema
;

export default Union;



