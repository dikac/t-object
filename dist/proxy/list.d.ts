import Merge from "@dikac/t-array/merge";
export default function List<Objects extends object[]>(object: Objects, factories: ((argument: Objects) => ProxyHandler<Partial<Merge<Objects>>>)[]): Merge<Objects>;
