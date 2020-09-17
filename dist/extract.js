/**
 * extract {@template ObjectTemplate} by {@template Key}, extracted value will be
 * removed from {@template ObjectTemplate}
 */
export default class Extract {
    /**
     * @param value
     * source
     *
     * @param keys
     * key for extraction
     */
    constructor(value, keys) {
        this.keys = keys;
        /**
         * extraction result
         */
        this.return = {};
        this.value = value;
        for (let key of this.keys) {
            this.return[key] = value[key];
            delete value[key];
        }
    }
}
//# sourceMappingURL=extract.js.map