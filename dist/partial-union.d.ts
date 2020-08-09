import { Object } from "ts-toolbelt";
declare type PartialUnion<Schema extends Record<keyof Schema, unknown>> = Partial<Schema> | Record<keyof Schema, Object.UnionOf<Schema>> | Schema;
export default PartialUnion;
