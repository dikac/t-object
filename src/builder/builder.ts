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

    constructor(
        public context : Context
    ) {

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

        for(let [property, value] of this) {

            value(<Type>target, property, this.context, option);
        }

        return target as Type;
    }

}
