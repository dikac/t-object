/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */
export default function PropertyType<Type, Property extends string | number | symbol, Object extends object = object>(object: object, property: Property, validation: (value: any) => value is Type): object is Object & {
    [Key in Property]: Type;
};
