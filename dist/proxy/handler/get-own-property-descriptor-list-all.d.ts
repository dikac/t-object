import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class GetOwnPropertyDescriptorListAll<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'getOwnPropertyDescriptor'> {
    private descriptor;
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'getOwnPropertyDescriptor'>;
    getOwnPropertyDescriptor(target: ObjectT, property: PropertyKey): PropertyDescriptor | undefined;
}
