import Merge from "@dikac/t-array/merge";
import Property from "../../property/boolean/property";

export default function MergeAnonymous<
    ObjectT extends object,
    Handlers extends ProxyHandler<ObjectT>[]
>(... handlers : Handlers) : Merge<Handlers>  {

    let result : Merge<Handlers> = <Merge<Handlers>>{};

    const properties = [
        "getPrototypeOf", "setPrototypeOf", "isExtensible", "preventExtensions", "getOwnPropertyDescriptor", "has",
        "get", "set", "deleteProperty", "defineProperty", "enumerate", "ownKeys", "apply", "construct",
    ];

    for (let handler of handlers) {

        for(let property of properties) {

            if(Property(handler, property)) {

                result[property] = (... argument : any[]) => handler[property](...argument);
            }

        }
    }

    return result;
}
