import { Object } from "ts-toolbelt";
/**
 * similar to {@link globalThis.Record} but with recursive support
 */
declare type MapPartialUnion<Schema extends Record<PropertyKey, unknown>> = Partial<Schema> | Record<keyof Schema, Object.UnionOf<Schema>> | Schema;
export default MapPartialUnion;
