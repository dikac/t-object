import Infer from "./infer";
import { O } from "ts-toolbelt";
import Map from "../../parameter/record/map";
/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as rest argument
 *
 * @param object
 * @param argument
 */
export default function Method<Argument extends Record<PropertyKey, unknown[]>, Type extends Map<Argument>>(object: Type, argument: Argument): O.Pick<Infer<Type>, keyof Argument>;
