export declare type Validation<Type extends object> = {
    [Key in keyof Type]: (argument: Type[Key]) => boolean;
};
/**
 * Check if {@param value} key and value valid according to {@param validation}
 * {@param validation} value is used for check {@param value} under the same property name
 */
export default function Map<Type extends object, ValidationType extends Validation<Type> = Validation<Type>>(value: object, validation: ValidationType): value is Type;
