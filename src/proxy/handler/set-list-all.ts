import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {List} from "ts-toolbelt";
import {Required} from "utility-types";
import MultiHandlers from "./multi-handlers";

export default class SetListAll<
    ObjectT extends object,
    Objects extends object[] = object[]
> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'set'> {

    private settable : Partial<Record<PropertyKey, Partial<List.UnionOf<Objects>>[]>> = {};

    reset() {

        this.settable = {};
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'set'> {

        handler.set = (target: ObjectT, property: PropertyKey, value: any, receiver: any) => this.set(target, property, value, receiver);

        return handler as Required<ProxyHandler<Target>, 'set'>;
    }

    set(target: ObjectT, property: PropertyKey, value: any, receiver: any): boolean {

        if(Property(this.settable, property)) {

            let list = this.settable[<string|number>property] as Partial<List.UnionOf<Objects>>[];

            for(let object of list) {

                object[property] = value;
            }

            return list.length !== 0;
        }

        const list : Partial<List.UnionOf<Objects>>[] = [];

        for (let handler of this.getHandler(target)) {

            if(Writable(handler, property)) {

                list.push(handler);
            }
        }

        (this.settable as Partial<Record<PropertyKey, Partial<List.UnionOf<Objects>>[]>>)[<string|number>property] = list;

        return this.set(target, property, value, receiver);

    }
}
