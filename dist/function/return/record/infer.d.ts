import Function from "@dikac/t-function/function";
/**
 * get record of returns from record of function
 */
declare type Infer<Values extends object> = {
    [Key in keyof Values]: Values[Key] extends Function ? ReturnType<Values[Key]> : never;
};
export default Infer;
