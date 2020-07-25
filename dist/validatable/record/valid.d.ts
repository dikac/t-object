import Validatable from "@dikac/t-validatable/validatable";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<V extends Validatable = Validatable, Object extends Partial<Record<PropertyKey, V>> = Partial<Record<PropertyKey, V>>>(record: Object): Partial<Object>;
