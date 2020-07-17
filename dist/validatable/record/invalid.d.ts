import Validatable from "@dikac/t-validatable/validatable";
import Record from "../../record/record";
import { O } from "ts-toolbelt";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<V extends Validatable = Validatable, Object extends Record<keyof any, V> = Record<keyof any, V>>(record: Object): O.Partial<Object, 'deep'>;
