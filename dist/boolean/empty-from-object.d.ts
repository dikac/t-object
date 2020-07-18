import Value from "@dikac/t-value/value";
export default function EmptyFromObject(object: Value<object> & {
    empty: boolean;
}): boolean;
