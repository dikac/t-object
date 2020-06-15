/**
 * assign all {@param source} value to all undefined value in {@param target}
 */
import { Assign, OmitByValue } from "utility-types";
export default function AssignUndefined<Destination extends object, Source extends object>(target: Destination, source: Source): Assign<Source, OmitByValue<Destination, undefined>>;
