import { Object } from "ts-toolbelt";
declare type Union<Schema extends Record<any, unknown>> = Record<keyof Schema, Object.UnionOf<Schema>> | Schema;
export default Union;
