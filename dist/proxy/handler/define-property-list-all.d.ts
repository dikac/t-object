import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class DefinePropertyListAll<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'defineProperty'> {
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'defineProperty'>;
    defineProperty(target: ObjectT, property: PropertyKey, attributes: PropertyDescriptor): boolean;
}
