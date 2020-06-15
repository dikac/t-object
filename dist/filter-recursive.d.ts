import { DeepPartial } from "utility-types";
export default function FilterRecursive<O extends object = object>(record: O, validation: (val: any) => boolean): DeepPartial<O>;
