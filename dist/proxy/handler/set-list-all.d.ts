import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class SetListAll<Target extends object, Objects extends object[] = object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'set'> {
    private settable;
    reset(): void;
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'set'>;
    set(target: Target, property: PropertyKey, value: any, receiver: any): boolean;
}
