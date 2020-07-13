import { Object } from "ts-toolbelt";
declare type Set = Object.Required<Omit<PropertyDescriptor, 'value'>, 'set' | 'enumerable' | 'configurable'>;
export default Set;
