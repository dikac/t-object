import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default function ObjectStandard(value: unknown): Readonly<Validatable<false> & Message<string> & Value<unknown>> | Readonly<Validatable<true> & Message<string> & Value<object>>;
