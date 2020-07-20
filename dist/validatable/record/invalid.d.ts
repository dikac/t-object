import Validatable from "@dikac/t-validatable/validatable";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<V extends Validatable = Validatable, Object extends Record<PropertyKey, V> = Record<PropertyKey, V>>(record: Object): Partial<Object>;
