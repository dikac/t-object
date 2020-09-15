/**
 * check if property {@param property} in {@param object} type is {@template Type}
 * {@param validation} is use for validate value type
 */
export default function Value<ObjectType extends object, Property extends keyof ObjectType, Type extends ObjectType[Property] = ObjectType[Property]>(object: ObjectType, property: Property, validation: (value: ObjectType[Property]) => value is Type): object is {
    [Key in keyof ObjectType]: Key extends Property ? (Type extends ObjectType[Key] ? Type : ObjectType[Key]) : ObjectType[Key];
};
export default function Value<Object extends object = object, Property extends PropertyKey = PropertyKey, Type = unknown>(object: object, property: Property, validation: (value: unknown) => value is Type): object is Object & {
    [Key in Property]: Type;
};
