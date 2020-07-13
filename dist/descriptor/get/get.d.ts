import { Object } from "ts-toolbelt";
declare type Get = Object.Required<Omit<PropertyDescriptor, 'value'>, 'get' | 'enumerable' | 'configurable'>;
export default Get;
