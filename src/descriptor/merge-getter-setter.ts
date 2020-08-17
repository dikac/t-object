import Setter from "./setter";
import Getter from "./getter";

export default function MergeGetterSetter(
    destination : Getter|Setter,
    source : Getter|Setter
) : Getter|Setter|(Getter & Setter) {

    if(typeof source.get === "function") {

        destination.get = source.get;
    }

    if(typeof source.set === "function") {

        destination.set = source.set;
    }

    return destination;
}
