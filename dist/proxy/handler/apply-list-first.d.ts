import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class ApplyListFirst<ObjectT extends object, Objects extends object[]> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'apply'> {
    private callback?;
    reset(): void;
    bindTo<Target extends ObjectT>(handler: ProxyHandler<Target>): Required<ProxyHandler<Target>, 'apply'>;
    apply(target: ObjectT, thisArg: any, argArray?: any): any;
}
