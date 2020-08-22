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
