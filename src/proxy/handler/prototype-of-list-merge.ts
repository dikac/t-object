import {Required} from "utility-types";
import IsObject from "../../boolean/object";
import Getter from "../../descriptor/boolean/getter";
import Setter from "../../descriptor/boolean/setter";
import MergeGetterSetter from "../../descriptor/merge-getter-setter";
import MultiHandlers from "./multi-handlers";

export default class PrototypeOfListMerge<
    ObjectT extends object,
    Objects extends object[]
> extends MultiHandlers<ObjectT, Objects> implements ProxyHandler<ObjectT>  {

    private object : object = new class {};
    private generated : boolean = false;

    reset() {

        this.generated = false;
        this.object = new class {};
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'has'> {

        handler.getPrototypeOf = (target: ObjectT) => this.getPrototypeOf(target);

        return handler as Required<ProxyHandler<Target>, 'has'>;
    }

    setPrototypeOf(target: ObjectT, value: any): boolean {

        return Reflect.setPrototypeOf(Object.getPrototypeOf(this.object), value);
    }

    getPrototypeOf(target: ObjectT): object | null {

        if(this.generated) {

            return Object.getPrototypeOf(this.object);
        }

        this.generated = true;

        const buffers = new Map();

        for (const handler of this.getHandler(target)) {

            const prototype = Object.getPrototypeOf(handler);
            const symbols = Object.getOwnPropertySymbols(prototype);
            const properties = Object.getOwnPropertyNames(prototype);

            for (const key of [...symbols, ...properties]) {

                let descriptor = Object.getOwnPropertyDescriptor(prototype, key);

                if(!descriptor) {

                    continue;
                }

                // merge getter & setter
                if(buffers.has(key) && IsObject(buffers.get(key))) {

                    if(
                        (Getter(buffers.get(key)) && Setter(descriptor)) ||
                        (Setter(buffers.get(key)) && Getter(descriptor))
                    ) {

                        descriptor = MergeGetterSetter(buffers.get(key), descriptor);
                    }
                }

                buffers.set(key, descriptor);
            }
        }

        const prototype = Object.getPrototypeOf(this.object);

        for (const [property, descriptor] of buffers) {

            if(IsObject(descriptor)) {

                Object.defineProperty(prototype, property, descriptor);
            }
        }

        return this.getPrototypeOf(target);
    }

}
