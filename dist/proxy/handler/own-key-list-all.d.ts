import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class OwnKeyListAll<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'ownKeys'> {
    private keys?;
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'ownKeys'>;
    ownKeys(target: ObjectT): PropertyKey[];
}
