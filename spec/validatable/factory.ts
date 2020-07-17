export default class Factory  {

    constructor(
        private value : unknown,
        private type : string
    ) {
    }

    get message() : string {

        return (<any>this.value).toString() + ' ' + (this.valid ? 'valid' : 'invalid');
    }

    get valid () : boolean {

        return typeof this.value === this.type;
    }
}
