import Setter from "./setter";
import Getter from "./getter";

export default function MergeGetterSetter<SetterType extends Setter, GetterType extends Getter>(
    destination : SetterType,
    source : GetterType
) : Omit<SetterType, 'set'> & Pick<GetterType, 'set'>

export default function MergeGetterSetter<SetterType extends Setter, GetterType extends Getter>(
    destination : GetterType,
    source : SetterType
) : Omit<GetterType, 'set'> & Pick<SetterType, 'set'>

export default function MergeGetterSetter<SetterType extends Setter, GetterType extends Getter>(
    destination : GetterType|SetterType,
    source : GetterType|SetterType
) : GetterType|SetterType|(GetterType & SetterType)

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
