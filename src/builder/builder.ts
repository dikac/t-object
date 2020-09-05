import HandlerAlreadyExist from "./string/handler-already-exist";
import Callable from "./function/callable";

/**
 * simple object container
 */
export default class Builder<
    Type extends object,
    Context extends any = any,
    Option extends any = any
> implements Iterable<[keyof Type, Callable<Type, keyof Type, Context, Option>]> {

    private container = new Map<keyof Type, Callable<Type, keyof Type, Context, Option>>();

    readonly event : {
        preBuild : Set<(target:Type, context : Context, option : Option)=>void>,
        build : Set<Callable<Type, keyof Type, Context, Option>>,
        postBuild : Set<(target:Type, context : Context, option : Option)=>void>,
    } = {
        preBuild : new Set<(target:Type, context : Context, option : Option)=>void>(),
        build : new Set<Callable<Type, keyof Type, Context, Option>>(),
        postBuild : new Set<(target:Type, context : Context, option : Option)=>void>(),
    }

    constructor(
        public context : Context
    ) {

        Object.freeze(this.event);
    }

    clear() {

        this.container.clear();
    }

    set<Property extends keyof Type>(property : Property, handler : Callable<Type, Property, Context, Option>) {

        if(this.container.has(property)) {

            throw new Error(HandlerAlreadyExist(property));
        }

        this.container.set(property, handler);
    }

    get<Property extends keyof Type>(property : Property) : (Callable<Type, Property, Context, Option>) | undefined {

        return this.container.get(property);
    }

    delete(property : keyof Type) : boolean {

        return this.container.delete(property);
    }

    has (property : keyof Type) : boolean {

        return this.container.has(property);
    }

    [Symbol.iterator](): Iterator<[keyof Type, Callable<Type, keyof Type, Context, Option>]> {

        return this.container[Symbol.iterator]();
    }

    build(target : Partial<Type> = {}, option : Option) : Type {

        this.event.preBuild.forEach(value => value(<Type>target, this.context, option));

        for(let [property, value] of this) {

            value(<Type>target, property, this.context, option);
            this.event.build.forEach(value => value(<Type>target, property, this.context, option));
        }

        this.event.postBuild.forEach(value => value(<Type>target, this.context, option));

        return target as Type;
    }

}
