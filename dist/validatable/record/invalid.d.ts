import Validatable from "@dikac/t-validatable/validatable";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>>(record: Object): Partial<Object>;
