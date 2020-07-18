
type Value<Value> = Value extends Record<any, infer As> ? As : never;

export default Value;
