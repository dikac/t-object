import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class IsExtensibleListAll<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'isExtensible'> {
    extensible?: boolean;
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'isExtensible'>;
    isExtensible(target: ObjectT): boolean;
}
