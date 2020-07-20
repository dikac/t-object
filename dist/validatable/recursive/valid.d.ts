import Validatable from "@dikac/t-validatable/validatable";
import Optional from "../../recursive/optional";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<V extends Validatable = Validatable, Object extends Record<PropertyKey, V> = Record<PropertyKey, V>>(record: Object): Optional<Object>;
