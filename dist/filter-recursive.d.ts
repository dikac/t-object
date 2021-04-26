import { O } from "ts-toolbelt";
import { DeepPartial } from "utility-types";
import RecursiveUnion from "./recursive-union";
export default function FilterRecursive<Object extends Record<PropertyKey, any>>(record: Object, filter: (value: RecursiveUnion<Object> | O.UnionOf<Object>, key: keyof Object) => boolean): DeepPartial<Object>;
