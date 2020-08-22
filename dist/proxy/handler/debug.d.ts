import Function from "@dikac/t-function/function";
export default class Debug<ObjectT extends object> implements Required<ProxyHandler<ObjectT>> {
    handler: Function<[string, any[]]>;
    constructor(handler?: Function<[string, any[]]>);
    getPrototypeOf(target: ObjectT): object | null;
    setPrototypeOf(target: ObjectT, v: any): boolean;
    apply(target: ObjectT, thisArg: any, argArray: any): any;
    construct(target: ObjectT, argArray: any, newTarget: any): Object;
    defineProperty(target: ObjectT, p: PropertyKey, attributes: PropertyDescriptor): boolean;
    deleteProperty(target: ObjectT, p: PropertyKey): boolean;
    enumerate(target: ObjectT): PropertyKey[];
    get(target: ObjectT, p: PropertyKey, receiver: any): any;
    getOwnPropertyDescriptor(target: ObjectT, p: PropertyKey): PropertyDescriptor | undefined;
    has(target: ObjectT, p: PropertyKey): boolean;
    isExtensible(target: ObjectT): boolean;
    ownKeys(target: ObjectT): PropertyKey[];
    preventExtensions(target: ObjectT): boolean;
    set(target: ObjectT, p: PropertyKey, value: any, receiver: any): boolean;
}
