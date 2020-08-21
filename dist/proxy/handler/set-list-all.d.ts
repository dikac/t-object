import { List } from "ts-toolbelt";
import { Required } from "utility-types";
export default class SetListAll<ObjectT extends object, Objects extends object[] = object[]> implements Required<ProxyHandler<ObjectT>, 'set'> {
    private handlers;
    private settable;
    constructor(handlers: Objects);
    reset(): void;
    handle(): Partial<Record<keyof List.UnionOf<Objects>, Partial<List.UnionOf<Objects>>[]>>;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'set'>;
    set(target: ObjectT, property: PropertyKey, value: any, receiver: any): boolean;
}
