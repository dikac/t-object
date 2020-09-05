import {Object} from "ts-toolbelt";

type Getter = Object.Required<Omit<PropertyDescriptor,'value'>,'get'>

export default Getter;


