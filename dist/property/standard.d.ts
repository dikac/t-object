import Property from "./property";
export default class Standard<P extends string | number | symbol> implements Property<P> {
    property: P;
    constructor(property: P);
}
