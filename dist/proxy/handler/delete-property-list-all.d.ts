import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class DeletePropertyListAll<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'deleteProperty'> {
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'deleteProperty'>;
    deleteProperty(target: ObjectT, property: PropertyKey): boolean;
}
