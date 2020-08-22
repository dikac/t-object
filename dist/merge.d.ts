import { UnionToIntersection, ValuesType } from 'utility-types';
/**
 * @deprecated
 * Merge object property, symbol and method, the latter object will replace former
 */
export default function Merge<Objects extends object[]>(...objects: Objects): UnionToIntersection<ValuesType<Objects>>;
