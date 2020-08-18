import Function from "@dikac/t-function/function";
/**
 * get record of first parameters from record of function
 */
declare type InferSingle<Values extends object> = {
    [Key in keyof Values]: Values[Key] extends Function ? Parameters<Values[Key]>[0] : never;
};
export default InferSingle;
