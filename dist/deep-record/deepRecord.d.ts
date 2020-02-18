import Validatable from "../validatable";
export default interface Record_<V extends Validatable = Validatable> extends Record<string | number, Record_<V> | V> {
}
