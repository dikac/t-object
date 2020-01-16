import {PropertyDescriptorSetter} from "./boolean/descriptor-setter";
import {PropertyDescriptorGetter} from "./boolean/descriptor-getter";

export default function MergeDescriptorGetterSetter(
    descriptor1 : PropertyDescriptorGetter|PropertyDescriptorSetter,
    descriptor2 : PropertyDescriptorGetter|PropertyDescriptorSetter
) : PropertyDescriptorGetter|PropertyDescriptorSetter|(PropertyDescriptorGetter&PropertyDescriptorSetter) {

    if(typeof descriptor2.get === "function") {

        descriptor1.get = descriptor2.get;
    }

    if(typeof descriptor2.set === "function") {

        descriptor1.set = descriptor2.set;
    }

    return descriptor1;
}