/**
 * Check if {@param value} is object and not null
 *
 * {@template Assumption} can be used for type guard if object type is known
 */
export default function Object_<Assumption extends object>(value: unknown): value is Assumption;
