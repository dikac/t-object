import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class PrototypeOfListMerge<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements ProxyHandler<Target> {
    private object;
    private generated;
    reset(): void;
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'has'>;
    setPrototypeOf(target: Target, value: any): boolean;
    getPrototypeOf(target: Target): object | null;
}
