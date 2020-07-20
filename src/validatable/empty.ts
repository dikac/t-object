import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import EmptyArgument from "../value/boolean/empty";

export default class Empty<Msg>
    extends MergeWrapper<Value<object>, Message<Msg>, Validatable>
{
    readonly empty : boolean;

    constructor(
        number : object,
        empty : boolean,
        message : Function<[Readonly<Value<object> & Validatable>], Msg>,
    ) {

        let container : Value<object> & {empty : boolean} = {
            empty : empty,
            value : number,
        };

        let msg = MessageCallback(container, EmptyArgument, ()=>message(this));

        super(container, msg, msg);

        this.empty = empty;
    }
}
