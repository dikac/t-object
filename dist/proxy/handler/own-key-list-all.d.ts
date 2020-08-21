import { Required } from "utility-types";
export default class OwnKeyListAll<ObjectT extends object, Objects extends object[]> implements Required<ProxyHandler<ObjectT>, 'ownKeys'> {
    private handlers;
    private keys?;
    constructor(handlers: Objects);
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'ownKeys'>;
    ownKeys(target: ObjectT): PropertyKey[];
}
