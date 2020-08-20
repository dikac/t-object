import { Object } from "ts-toolbelt";
/**
 * remove undefined from {@param object}
 * @param object
 */
export default function OmitUndefined<O extends object>(object: O): Omit<O, Object.Keys<Object.Select<O, undefined>>>;
