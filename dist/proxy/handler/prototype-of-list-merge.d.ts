import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class PrototypeOfListMerge<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements ProxyHandler<ObjectT> {
    private object;
    private generated;
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'has'>;
    setPrototypeOf(target: ObjectT, value: any): boolean;
    getPrototypeOf(target: ObjectT): object | null;
}
