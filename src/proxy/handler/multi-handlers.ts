import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import {Required} from "utility-types";
import IsFunction from "@dikac/t-function/boolean/function";
import FunctionType from "@dikac/t-function/function";
import {List} from "ts-toolbelt";

export default class MultiHandlers<
    ObjectT extends object,
    Objects extends object[]
> {

    constructor(
        private handlers : Objects,
        private withTarget : boolean = true
    ) {
    }

    protected getHandler(target: ObjectT) : Objects | List.Prepend<Objects, ObjectT> {

        if(this.withTarget) {

            return [target, ...this.handlers] as List.Prepend<Objects, ObjectT>;

        } else {

            return this.handlers;
        }
    }

}
