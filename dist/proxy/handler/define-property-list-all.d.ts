import { Required } from "utility-types";
export default class DefinePropertyListAll<ObjectT extends object, Objects extends object[]> implements Required<ProxyHandler<ObjectT>, 'defineProperty'> {
    handlers: Objects;
    constructor(handlers: Objects);
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'defineProperty'>;
    defineProperty(target: ObjectT, property: PropertyKey, attributes: PropertyDescriptor): boolean;
}
