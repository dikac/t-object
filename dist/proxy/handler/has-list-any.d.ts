import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class HasListAny<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'has'> {
    private handler;
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'has'>;
    has(target: ObjectT, property: PropertyKey): boolean;
}
