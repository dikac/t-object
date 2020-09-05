import Setter from "./setter";
import Getter from "./getter";
export default function MergeGetterSetter<SetterType extends Setter, GetterType extends Getter>(destination: SetterType, source: GetterType): Omit<SetterType, 'set'> & Pick<GetterType, 'set'>;
export default function MergeGetterSetter<SetterType extends Setter, GetterType extends Getter>(destination: GetterType, source: SetterType): Omit<GetterType, 'set'> & Pick<SetterType, 'set'>;
export default function MergeGetterSetter<SetterType extends Setter, GetterType extends Getter>(destination: GetterType | SetterType, source: GetterType | SetterType): GetterType | SetterType | (GetterType & SetterType);
