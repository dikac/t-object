export default function <O extends object, Value>(value: object, validator: (value: any) => value is Value): boolean;
