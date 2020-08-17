import {Object} from "ts-toolbelt";

type Getter = Object.Required<Omit<PropertyDescriptor,'value'>,'get'|'enumerable'|'configurable'>

export default Getter;


