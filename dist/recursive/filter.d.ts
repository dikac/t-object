import Recursive from "./recursive";
import { O } from "ts-toolbelt";
import Fn from "@dikac/t-function/function";
import Fns from "@dikac/t-function/function-single";
/**
 * recursively filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 *
 * {@param validation} is used to distinguish between value to be validated by {@param filter} or tobe called
 * recursively
 */
export default function Filter<Type, Object extends Recursive<PropertyKey, Type> = Recursive<PropertyKey, Type>>(record: Object, validation: Fns<any, boolean>, filter: Fn<[Type], boolean>): O.Partial<Object, 'deep'>;
