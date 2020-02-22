import Property from "./property";

export default class Standard<P extends string|number|symbol> implements Property<P>{

    constructor(
        public property : P
    ) {}
}
