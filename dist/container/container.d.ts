import Callable from "./function/callable";
/**
 * simple object container
 */
export default class Container<Type extends object, Context extends any = any, Option extends any = any> implements Iterable<[keyof Type, Callable<Type, keyof Type, Context, Option>]> {
    context: Context;
    private container;
    constructor(context: Context);
    clear(): void;
    set<Property extends keyof Type>(property: Property, handler: Callable<Type, Property, Context, Option>): void;
    get<Property extends keyof Type>(property: Property): (Callable<Type, Property, Context, Option>) | undefined;
    delete(property: keyof Type): boolean;
    has(property: keyof Type): boolean;
    [Symbol.iterator](): Iterator<[keyof Type, Callable<Type, keyof Type, Context, Option>]>;
    build(target: Partial<Type> | undefined, option: Option): Type;
}
