import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {Required} from "utility-types";
import IsFunction from "@dikac/t-function/boolean/function";
import FunctionType from "@dikac/t-function/function";
import {List} from "ts-toolbelt";
import MultiHandlers from "./multi-handlers";

export default class ApplyListFirst<
    ObjectT extends object,
    Objects extends object[]
> extends MultiHandlers<ObjectT, Objects> implements Required<ProxyHandler<ObjectT>, 'apply'> {

    private callback ?: Function|null = null;


    reset() {

        this.callback = undefined;
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'apply'> {

        handler.apply = (target: ObjectT, thisArg: any, argArray ?: any) => this.apply(target, thisArg, argArray);

        return handler as Required<ProxyHandler<Target>, 'apply'>;
    }

    apply(target: ObjectT, thisArg: any, argArray ?: any) : any {

        if(this.callback !== undefined) {

            if(this.callback) {

                return this.callback(...argArray)

            } else {

                throw new Error('Callable is not found')
            }
        }


        this.callback = null;

        for (let handler of this.getHandler(target)) {

            if(IsFunction(handler)) {

                this.callback = (... args : any[]) => (<Function>handler)(...args);
                break;
            }
        }

        return this.apply(target, thisArg, argArray);
    }

}
