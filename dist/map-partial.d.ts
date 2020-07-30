/**
 * similar to {@link globalThis.Record} but with recursive support
 */
declare type MapPartial<Schema extends Partial<Record<PropertyKey, unknown>>, Replace> = {
    [Key in keyof Schema]?: Replace;
};
export default MapPartial;
