export default class Debug<ObjectType extends object> implements Required<ProxyHandler<ObjectType>> {
    handler: (handler: string, args: any[]) => void;
    constructor(handler?: (handler: string, args: any[]) => void);
    getPrototypeOf(target: ObjectType): object | null;
    setPrototypeOf(target: ObjectType, v: any): boolean;
    apply(target: ObjectType, thisArg: any, argArray: any): any;
    construct(target: ObjectType, argArray: any, newTarget: any): Object;
    defineProperty(target: ObjectType, p: PropertyKey, attributes: PropertyDescriptor): boolean;
    deleteProperty(target: ObjectType, p: PropertyKey): boolean;
    enumerate(target: ObjectType): PropertyKey[];
    get(target: ObjectType, p: PropertyKey, receiver: any): any;
    getOwnPropertyDescriptor(target: ObjectType, p: PropertyKey): PropertyDescriptor | undefined;
    has(target: ObjectType, p: PropertyKey): boolean;
    isExtensible(target: ObjectType): boolean;
    ownKeys(target: ObjectType): (string | symbol)[];
    preventExtensions(target: ObjectType): boolean;
    set(target: ObjectType, p: PropertyKey, value: any, receiver: any): boolean;
}
