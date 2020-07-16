export class Validator  {

    constructor(private type : string) {
    }

    validate(value : unknown) : Validatable {

        return new Validatable(value, this.type);
    }
}

export class Validatable  {

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
