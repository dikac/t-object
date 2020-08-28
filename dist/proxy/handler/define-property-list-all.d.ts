import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class DefinePropertyListAll<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'defineProperty'> {
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'defineProperty'>;
    defineProperty(target: Target, property: PropertyKey, attributes: PropertyDescriptor): boolean;
}
