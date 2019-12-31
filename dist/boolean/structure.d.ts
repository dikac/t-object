export declare type Validator<Type extends object> = {
    [Key in keyof Type]: (value: Type[Key]) => boolean;
};
export default function Structure<Type extends object>(value: any, validators: Validator<Type>): value is Type;
