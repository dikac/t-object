import Value from "@dikac/t-value/value";


export default class Property<Key extends keyof Object, Object extends object> implements Value<Object[Key]> {

    constructor(
        public object : Object,
        public key : Key
    ) {
    }

    get value () : Object[Key] {

        return this.object[this.key];
    }

    set value (value : Object[Key]) {

        this.object[this.key] = value;
    }

}
