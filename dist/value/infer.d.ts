/**
 * {@link Infer} valid value type
 */
declare type Infer<Instance> = Instance extends Record<PropertyKey, infer As> ? As : never;
export default Infer;
