import {Object} from "ts-toolbelt";

type Get = Object.Required<Omit<PropertyDescriptor,'value'>,'get'|'enumerable'|'configurable'>

export default Get;


