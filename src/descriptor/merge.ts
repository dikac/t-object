import Set from "./set/set";
import Get from "./get/get";

export default function Merge(
    destination : Get|Set,
    source : Get|Set
) : Get|Set|(Get & Set) {

    if(typeof source.get === "function") {

        destination.get = source.get;
    }

    if(typeof source.set === "function") {

        destination.set = source.set;
    }

    return destination;
}
