import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class GetOwnPropertyDescriptorListAll<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'getOwnPropertyDescriptor'> {
    private descriptor;
    reset(): void;
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'getOwnPropertyDescriptor'>;
    getOwnPropertyDescriptor(target: Target, property: PropertyKey): PropertyDescriptor | undefined;
}
