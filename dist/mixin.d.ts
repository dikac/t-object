import { UnionToIntersection, ValuesType } from 'utility-types';
export default function Mixin<Objects extends object[]>(...objects: Objects): UnionToIntersection<ValuesType<Objects>>;
