import { Object } from "ts-toolbelt";
export default function RemoveUndefined<O extends object>(object: O): Omit<O, Object.Keys<Object.Select<O, undefined>>>;
