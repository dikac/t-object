import Validatable from "@dikac/t-validatable/validatable";
import Record from "../../record/record";
import { O } from "ts-toolbelt";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<V extends Validatable = Validatable, Object extends Record<PropertyKey, V> = Record<PropertyKey, V>>(record: Object): O.Partial<Object, 'deep'>;
