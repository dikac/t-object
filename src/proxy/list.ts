import Function from "@dikac/t-function/function";
import Merge from "@dikac/t-array/merge";
import MergeAnonymous from "./handler/merge-anonymous";

export default function List<Objects extends object[]>(
    object : Objects,
    factories : Function<[Objects], ProxyHandler<Partial<Merge<Objects>>>>[]
) : Merge<Objects> {


    let handlers : ProxyHandler<Partial<Merge<Objects>>>[] = [];

    for (let factory of factories) {

        handlers.push(factory(object))
    }

    let handler = MergeAnonymous(...handlers)

    return new Proxy({}, handler) as Merge<Objects>;
}
