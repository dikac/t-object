import { Object } from "ts-toolbelt";
declare type Setter = Object.Required<Omit<PropertyDescriptor, 'value'>, 'set'>;
export default Setter;
