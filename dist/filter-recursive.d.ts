import { Object } from "ts-toolbelt";
export default function FilterRecursive<O extends object = object>(record: O, validation: (val: any) => boolean): Object.Partial<O, 'deep'>;
