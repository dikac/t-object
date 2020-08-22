import Merge from "@dikac/t-array/merge";
export default function MergeAnonymous<ObjectT extends object, Handlers extends ProxyHandler<ObjectT>[]>(...handlers: Handlers): Merge<Handlers>;
