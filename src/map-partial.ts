/**
 * @deprecated
 * use {@link Map} & {@link Partial}
 */
type MapPartial<Schema extends Partial<Record<PropertyKey, unknown>>, Replace> = {
    [Key in keyof Schema] ? : Replace
};

export default MapPartial;
