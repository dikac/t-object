import Function from "@dikac/t-function/function";
import Merge from "@dikac/t-array/merge";
export default function List<Objects extends object[]>(object: Objects, factories: Function<[Objects], ProxyHandler<Partial<Merge<Objects>>>>[]): Merge<Objects>;
