import {Required} from "utility-types";
import Methods from "./methods";
import Type from "./type";

export type PropertyDescriptorSetter = Required<Omit<PropertyDescriptor,'value'>,'set'|'enumerable'|'configurable'>

export default function DescriptorSetter(value : object) : value is PropertyDescriptorSetter {

    if(!Type<PropertyDescriptorSetter>(value)) {

        return false;
    }

    if(!Methods(value, 'set')) {

        return false;
    }

    if(value.enumerable !== false) {

        return false
    }

    if(value.configurable !== true) {

        return false
    }

    return true;
}