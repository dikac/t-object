import Callable from "@dikac/t-function/callable";


/**
 * get record of returns from record of function
 */

type Infer<Values extends object> = {
    [Key in keyof Values]:  Values[Key] extends Callable ? ReturnType<Values[Key]> : never
}
export default Infer;
