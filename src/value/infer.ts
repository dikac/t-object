/**
 * {@link Infer} valid value type
 */
type Infer<Instance> = Instance extends Record<PropertyKey, infer As> ? As : never;

export default Infer;


//
// let o = {
//     a : 1,
//     b : 2,
//     c : 'data'
// }
//
// let bb = {
//     a : 1,
//     b : 2,
//     c : 'data',
//     d : true,
//     e : {}
// }
//
//
// function f<O extends object>(o : O) : Infer<O> {
//     return <Infer<O>><any> 1
// }
//
// let a : string|number = f(o);
// let ab : string|number|boolean|object = f(bb);
