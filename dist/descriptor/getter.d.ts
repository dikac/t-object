import { Object } from "ts-toolbelt";
declare type Getter = Object.Required<Omit<PropertyDescriptor, 'value'>, 'get' | 'enumerable' | 'configurable'>;
export default Getter;
