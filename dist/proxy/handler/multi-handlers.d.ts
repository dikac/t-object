import { List } from "ts-toolbelt";
export default class MultiHandlers<ObjectT extends object, Objects extends object[]> {
    private handlers;
    private withTarget;
    constructor(handlers: Objects, withTarget?: boolean);
    protected getHandler(target: ObjectT): Objects | List.Prepend<Objects, ObjectT>;
}
