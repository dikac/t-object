export default function MemoizeGetter<This extends object, Type>(object: This, property: keyof This, value: Type, configurable?: boolean): Type;
