import { Required } from "utility-types";
export default class DeletePropertyListAll<ObjectT extends object, Objects extends object[]> implements Required<ProxyHandler<ObjectT>, 'deleteProperty'> {
    handlers: Objects;
    constructor(handlers: Objects);
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'deleteProperty'>;
    deleteProperty(target: ObjectT, property: PropertyKey): boolean;
}
