import Fn from "@dikac/t-function/function";
export declare type Validation<Type extends object> = {
    [Key in keyof Type]: Fn<[Type[Key]], boolean>;
};
/**
 * Check if {@param value} key and value valid according to {@param validation}
 * {@param validation} value is used for check {@param value} under the same property name
 */
export default function Structure<Type extends object, V extends Validation<Type> = Validation<Type>>(value: any, validation: V): value is Type;
