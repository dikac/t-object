/**
 * Check if {@param value} is object and not null
 *
 * {@template Assumption} can be used for type guard if object type is known
 */
export default function Object<Assumption extends object>(value: any): value is Assumption;
