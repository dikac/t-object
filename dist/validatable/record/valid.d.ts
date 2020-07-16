import Validatable from "@dikac/t-validatable/validatable";
import Record from "@dikac/t-object/record/recursive/record";
import { O } from "ts-toolbelt";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<V extends Validatable = Validatable, Object extends Record<keyof any, V> = Record<keyof any, V>>(record: Object): O.Partial<Object, 'deep'>;
