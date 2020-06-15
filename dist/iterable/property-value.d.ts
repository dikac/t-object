/**
 * iterate {@param object} property and value in array form
 */
export default function ObjectProperty<Property extends string | symbol | number, Value extends any>(object: Record<Property, Value>): Iterable<[Property, Value]>;
