import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class IsExtensibleListAll<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'isExtensible'> {
    extensible?: boolean;
    reset(): void;
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'isExtensible'>;
    isExtensible(target: Target): boolean;
}
