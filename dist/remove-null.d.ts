import { Object } from "ts-toolbelt";
export default function RemoveNull<O extends object>(object: O): Omit<O, Object.Keys<Object.Select<O, null>>>;
