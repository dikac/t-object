import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class HasListAny<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'has'> {
    private handler;
    reset(): void;
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'has'>;
    has(target: Target, property: PropertyKey): boolean;
}
