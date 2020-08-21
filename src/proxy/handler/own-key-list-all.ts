import Property from "../../property/boolean/property";
import Writable from "../../property/boolean/writable";
import Unique from "@dikac/t-array/unique";
import {Required} from "utility-types";

export default class OwnKeyListAll<
    ObjectT extends object,
    Objects extends object[]
> implements Required<ProxyHandler<ObjectT>, 'ownKeys'> {

    private keys ?: PropertyKey[];

    constructor(
        private handlers : Objects
    ) {
    }

    reset() {

        this.keys = undefined;
    }

    bindTo<Target extends ObjectT>(handler : ProxyHandler<Target>) : Required<ProxyHandler<Target>, 'ownKeys'>  {

        handler.ownKeys = (target: ObjectT) => this.ownKeys(target);

        return <Required<ProxyHandler<Target>, 'ownKeys'>> handler;
    }


    ownKeys(target: ObjectT): PropertyKey[] {

        if(this.keys) {

            return this.keys;
        }

        this.keys = [];

        for(let object of [target, ...this.handlers]) {

            this.keys.push(...Object.getOwnPropertySymbols(object));
            this.keys.push(...Object.getOwnPropertyNames(object));
        }
        this.keys = Unique(this.keys);

        return this.keys;
    }
}
