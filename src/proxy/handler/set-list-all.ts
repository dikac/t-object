import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {List, Union} from "ts-toolbelt";
import {UnionToIntersection, Unionize, Required} from "utility-types";

export default class SetListAll<
    ObjectT extends object,
    Objects extends object[] = object[]
> implements Required<ProxyHandler<ObjectT>, 'set'> {

    private settable : Partial<Record<keyof List.UnionOf<Objects>, Partial<List.UnionOf<Objects>>[]>> = {};

    constructor(
        private handlers : Objects
    ) {
    }

    reset() {

        this.settable = {};
    }

    handle () : Partial<Record<keyof List.UnionOf<Objects>, Partial<List.UnionOf<Objects>>[]>> {

        return Object.assign({}, this.settable);
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'set'> {

        handler.set = (target: ObjectT, property: PropertyKey, value: any, receiver: any) => this.set(target, property, value, receiver);

        return handler as Required<ProxyHandler<Target>, 'set'>;
    }

    set(target: ObjectT, property: PropertyKey, value: any, receiver: any): boolean {

        if(Property(this.settable, property)) {

            for(let object of this.settable[property]) {

                object[property] = value;
            }

            return this.settable[property].length;
        }

        this.settable[property] = [];

        for (let handler of [target, ...this.handlers]) {

            if(Writable(handler, property)) {

                this.settable[property].push(handler);
            }
        }

        return this.set(target, property, value, receiver);

    }
}
