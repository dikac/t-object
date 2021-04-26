import { Object } from "ts-toolbelt";
/**
 * remove null from {@param object}
 * @param object
 */
export default function OmitNull<O extends object>(object: O): Omit<O, keyof Object.Select<O, null>>;
