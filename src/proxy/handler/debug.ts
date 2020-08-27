

export default  class Debug<ObjectT extends object> implements Required<ProxyHandler<ObjectT>> {

    constructor(
        public  handler :(handler:string, args:any[])=>void = (name : string, args : any[]) => console.log([name, args])
    ) {
    }

    getPrototypeOf (target: ObjectT): object | null {

        return Object.getPrototypeOf(target);
    }
    setPrototypeOf (target: ObjectT, v: any): boolean {

        return Reflect.setPrototypeOf(target, v);
    }

    apply(target: ObjectT, thisArg: any, argArray: any): any {

        this.handler('apply', [...arguments]);
    }

    construct(target: ObjectT, argArray: any, newTarget: any): Object {

        this.handler('construct', [...arguments]);

        return target;
    }

    defineProperty(target: ObjectT, p: PropertyKey, attributes: PropertyDescriptor): boolean {

        this.handler('defineProperty', [...arguments]);
        return false;
    }

    deleteProperty(target: ObjectT, p: PropertyKey): boolean {

        this.handler('deleteProperty', [...arguments]);
        return false;
    }

    enumerate(target: ObjectT): PropertyKey[] {

        this.handler('enumerate', [...arguments]);
        return [];
    }

    get(target: ObjectT, p: PropertyKey, receiver: any): any {

        this.handler('get', [...arguments]);
    }

    getOwnPropertyDescriptor(target: ObjectT, p: PropertyKey): PropertyDescriptor | undefined {

        this.handler('getOwnPropertyDescriptor', [...arguments]);
        return undefined;
    }

    has(target: ObjectT, p: PropertyKey): boolean {

        this.handler('has', [...arguments]);
        return false;
    }

    isExtensible(target: ObjectT): boolean {

        this.handler('isExtensible', [...arguments]);
        return false;
    }

    ownKeys(target: ObjectT): PropertyKey[] {

        this.handler('ownKeys', [...arguments]);
        return [];
    }

    preventExtensions(target: ObjectT): boolean {

        this.handler('preventExtensions', [...arguments]);
        return true;
    }

    set(target: ObjectT, p: PropertyKey, value: any, receiver: any): boolean {

        this.handler('set', [...arguments]);
        return true;
    }


}
