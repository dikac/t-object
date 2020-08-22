import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class PreventExtensibleListAll<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'preventExtensions'> {
    private extensible?;
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'preventExtensions'>;
    preventExtensions(target: ObjectT): boolean;
}
