import ObjectRecord from "./recursive";

/**
 * similar to {@link globalThis.Record} but with recursive support
 */
type Optional<Schema extends ObjectRecord<PropertyKey, unknown>> = {
    [Key in keyof Schema] ?: Schema[Key] extends ObjectRecord<PropertyKey, any> ? Optional<Schema[Key]> : Schema[Key]
};

export default Optional;
