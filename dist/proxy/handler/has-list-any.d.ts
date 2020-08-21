import { Required } from "utility-types";
export default class SetterList<ObjectT extends object, Objects extends object[]> implements Required<ProxyHandler<ObjectT>, 'has'> {
    private handlers;
    private handler;
    constructor(handlers: Objects);
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'has'>;
    has(target: ObjectT, property: PropertyKey): boolean;
}
