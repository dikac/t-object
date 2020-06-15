import {Required} from "utility-types";

type Get = Required<Omit<PropertyDescriptor,'value'>,'get'|'enumerable'|'configurable'>

export default Get;
