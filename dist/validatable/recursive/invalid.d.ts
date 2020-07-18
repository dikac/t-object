import Validatable from "@dikac/t-validatable/validatable";
import Recursive from "../../recursive/recursive";
import { O } from "ts-toolbelt";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<V extends Validatable = Validatable, Object extends Recursive<PropertyKey, V> = Recursive<PropertyKey, V>>(record: Object): O.Partial<Object, 'deep'>;
