import { Object } from "ts-toolbelt";
declare type Setter = Object.Required<Omit<PropertyDescriptor, 'value'>, 'set' | 'enumerable' | 'configurable'>;
export default Setter;
