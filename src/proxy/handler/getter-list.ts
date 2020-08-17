import Property from "../../property/boolean/property";
import Readable from "../../property/boolean/readable";

/**
 * construct or bind {@link ProxyHandler} for property getter from
 * list of partial compatible object, making it fully compatible
 *
 * value is from the fist compatible object list
 */
export default class GetterList<ObjectT extends object> implements ProxyHandler<ObjectT> {

    /**
     * mapping for getter handler
     */
    public handler : {[Key in keyof ObjectT] ?: Partial<ObjectT>} = {};

    /**
     * @param handlers
     * list of object witch partially compatible
     */
    constructor(
        public handlers : Partial<ObjectT>[]
    ) {
    }

    /**
     * reset cached mapping
     */
    reset() {

        this.handler = {};
    }

    /**
     * set handler to other {@link ProxyHandler<Target>}
     * @param handler
     */
    bind<Target extends ObjectT>(handler : ProxyHandler<Target>) {

        handler.get = (target: ObjectT, property: PropertyKey, receiver: any) => this.get(target, property, receiver);
    }

    /**
     * get the first compatible {@link handlers} property
     *
     * @param target
     * @param property
     * @param receiver
     */
    get(target: ObjectT, property: PropertyKey, receiver: any): any {

        if(Property(this.handler, property)) {

            return this.handler[property][property];
        }

        for (let handler of [target, ...this.handlers]) {

            if(Readable(handler, property)) {

                this.handler[property] = handler;

                return handler[property];
            }
        }

        this.handler[property] = {[property]:undefined}

        return undefined;
    }
}
