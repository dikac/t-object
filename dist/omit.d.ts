/**
 * Strict Omit
 * native, {@package utility-types}, {@package ts-toolbelt} does not provice strict
 */
declare type Omit<Object extends object, Key extends keyof Object> = globalThis.Omit<Object, Key>;
export default Omit;
