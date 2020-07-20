/**
 * similar to {@link globalThis.Record} but with recursive support
 */
type Optional<Schema extends Record<PropertyKey, unknown>> = {
    [Key in keyof Schema] ? : Schema[Key]
};

export default Optional;
