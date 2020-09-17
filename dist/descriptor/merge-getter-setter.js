export default function MergeGetterSetter(destination, source) {
    if (typeof source.get === "function") {
        destination.get = source.get;
    }
    if (typeof source.set === "function") {
        destination.set = source.set;
    }
    return destination;
}
//# sourceMappingURL=merge-getter-setter.js.map