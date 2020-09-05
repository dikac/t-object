type Callable<
    Type extends object,
    Property extends keyof Type,
    Context extends any,
    Option extends any
> = (
    target:Type,
    key : Property,
    context : Context,
    option : Option
)=>void

export default Callable;
