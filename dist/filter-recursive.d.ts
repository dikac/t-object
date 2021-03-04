import { O } from "ts-toolbelt";
import { DeepPartial } from "utility-types";
export default function FilterRecursive<Object extends Record<PropertyKey, any>>(record: Object, filter: (value: O.UnionOf<Object>, key: keyof Object) => boolean): DeepPartial<Object>;
