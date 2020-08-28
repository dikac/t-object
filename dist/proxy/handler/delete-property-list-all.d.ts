import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class DeletePropertyListAll<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'deleteProperty'> {
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'deleteProperty'>;
    deleteProperty(target: Target, property: PropertyKey): boolean;
}
