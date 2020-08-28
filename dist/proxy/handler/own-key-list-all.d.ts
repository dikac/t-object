import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class OwnKeyListAll<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'ownKeys'> {
    private keys?;
    reset(): void;
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'ownKeys'>;
    ownKeys(target: Target): PropertyKey[];
}
