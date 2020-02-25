import Record from "./record";

type Convert<Value, Replace, Container extends Record<Value>> = {
    [Key in keyof Container]: Container[Key] extends Record<Value> ? Convert<Value, Replace, Container[Key]>  : Replace
}

export default Convert;
