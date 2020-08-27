/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */
export default function Value<Type, Property extends PropertyKey, Object extends object = object>(object: object, property: Property, validation: (value: unknown) => value is Type): object is Object & {
    [Key in Property]: Type;
};
