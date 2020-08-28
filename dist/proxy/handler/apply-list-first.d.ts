import { Required } from "utility-types";
import MultiHandlers from "./multi-handlers";
export default class ApplyListFirst<Target extends object, Objects extends object[]> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'apply'> {
    private callback?;
    reset(): void;
    bindTo<Argument extends Target>(handler: ProxyHandler<Argument>): Required<ProxyHandler<Argument>, 'apply'>;
    apply(target: Target, thisArg: any, argArray?: any): any;
}
