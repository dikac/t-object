import { Required } from "utility-types";
export default class PreventExtensibleListAll<ObjectT extends object, Objects extends object[]> implements Required<ProxyHandler<ObjectT>, 'preventExtensions'> {
    handlers: Objects;
    extensible?: boolean;
    constructor(handlers: Objects);
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'preventExtensions'>;
    preventExtensions(target: ObjectT): boolean;
}
