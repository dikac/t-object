import { Object } from "ts-toolbelt";
declare type Getter = Object.Required<Omit<PropertyDescriptor, 'value'>, 'get'>;
export default Getter;
