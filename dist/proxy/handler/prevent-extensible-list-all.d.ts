import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class PreventExtensibleListAll<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'preventExtensions'> {
    private extensible?;
    reset(): void;
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'preventExtensions'>;
    preventExtensions(target: Target): boolean;
}
