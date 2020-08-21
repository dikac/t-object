import { Required } from "utility-types";
export default class IsExtensibleListAll<ObjectT extends object, Objects extends object[]> implements Required<ProxyHandler<ObjectT>, 'isExtensible'> {
    handlers: Objects[];
    extensible?: boolean;
    constructor(handlers: Objects[]);
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'isExtensible'>;
    isExtensible(target: ObjectT): boolean;
}
