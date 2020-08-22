import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class SetListAll<ObjectT extends object, Objects extends object[] = object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'set'> {
    private settable;
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'set'>;
    set(target: ObjectT, property: PropertyKey, value: any, receiver: any): boolean;
}
