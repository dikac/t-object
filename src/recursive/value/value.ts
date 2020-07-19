import Recursive from "../recursive";

type Value<Value> = Value extends Recursive<any, infer As> ? As : never;

export default Value;
