/**
 * similar to {@link globalThis.Record} but with recursive support
 */
declare type Optional<Schema extends Record<PropertyKey, unknown>> = {
    [Key in keyof Schema]?: Schema[Key];
};
export default Optional;
