
type Property<Value> = Value extends Record<infer As, any> ? As : never;

export default Property;
