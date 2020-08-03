import Validatable from "@dikac/t-validatable/validatable";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<ValidatableT extends Validatable = Validatable, Object extends Partial<Record<PropertyKey, ValidatableT>> = Partial<Record<PropertyKey, ValidatableT>>>(record: Object): Partial<Object>;
