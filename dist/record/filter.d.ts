import { DeepPartial } from "utility-types";
import Record from "./record";
export default function Filter<V, O extends Record<V> = Record<V>>(record: O, filter: (val: V) => boolean, validation: (val: any) => val is V): DeepPartial<O>;
