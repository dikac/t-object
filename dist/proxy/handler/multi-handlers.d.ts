import { List } from "ts-toolbelt";
export default class MultiHandlers<Target extends object, Objects extends object[]> {
    private handlers;
    private withTarget;
    constructor(handlers: Objects, withTarget?: boolean);
    protected getHandler(target: Target): Objects | List.Prepend<Objects, Target>;
}
