import MergeAnonymous from "./handler/merge-anonymous";
export default function List(object, factories) {
    let handlers = [];
    for (let factory of factories) {
        handlers.push(factory(object));
    }
    let handler = MergeAnonymous(...handlers);
    return new Proxy({}, handler);
}
//# sourceMappingURL=list.js.map