import Merge from "@dikac/t-array/merge";
export default function MergeAnonymous<Target extends object, Handlers extends ProxyHandler<Target>[]>(...handlers: Handlers): Merge<Handlers>;
