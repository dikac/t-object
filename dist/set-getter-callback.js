import SetPropertyCallback from "./set-property-callback";
export default function SetGetterCallback(object, property, factory, configurable = true) {
    return SetPropertyCallback(object, property, factory, false, configurable);
}
//# sourceMappingURL=set-getter-callback.js.map