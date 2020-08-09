import Validatable from "@dikac/t-validatable/validatable";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<Object extends Partial<Record<keyof Object, Validatable>> = Partial<Record<PropertyKey, Validatable>>>(record: Object): Partial<Object>;
