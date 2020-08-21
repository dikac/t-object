import { Required } from "utility-types";
export default class GetOwnPropertyDescriptorListAll<ObjectT extends object, Objects extends object[]> implements Required<ProxyHandler<ObjectT>, 'getOwnPropertyDescriptor'> {
    handlers: Objects;
    descriptor: Record<PropertyKey, PropertyDescriptor | undefined>;
    constructor(handlers: Objects);
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'getOwnPropertyDescriptor'>;
    getOwnPropertyDescriptor(target: ObjectT, property: PropertyKey): PropertyDescriptor | undefined;
}
