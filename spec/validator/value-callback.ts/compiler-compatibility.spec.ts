import Type from "@dikac/t-type/validator/type-standard";
import ValueCallback from "../../../dist/validator/value-callback";
import ValidateValue from "../../../dist/validator/validatable/record/value";
import And from "../../../dist/validatable/and";
import MessageMap from "../../../dist/message/message/record/map";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "../../../dist/validatable/validatables/validatables";
import Validatables from "../../../dist/validatable/validatables";
import ValidatorValidatable from "../../../dist/validator/validatable/record/infer";
import ValidateValuePartial from "../../../dist/validator/validatable/record/value-partial";
import Message from "@dikac/t-message/message";
import Infer from "../../../dist/validator/validatable/record/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});



let validator = {
    name : Type('string'),
    address : Type('string'),
};

type Messages = {
    name : string,
    address : string,
}

describe("implicit complete", function() {

    // TODO FIX FORCED ARROW FUNCTION?
    let property = new ValueCallback<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValidateValue, And, result => MessageMap(result));

    let validatable = property.validate('data');

    describe("implicit complete", function() {

        let key : Validatable = validatable.validatables.name;
        key = validatable.validatables.address;

        let validatables : ValidatablesInterface = validatable;

        let record : Record<PropertyKey, Validatable> = validatable.validatables;

        // @ts-expect-error
        let and : Validatables = validatable.validatables;

        if(validatable.valid) {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;
        }
    });
});

describe("explicit complete", function() {

    let property = new ValueCallback<string>(validator,
        (value, validators) => ValidateValue(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property.validate('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }

});

describe("implicit partial", function() {

    let property = new ValueCallback(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property.validate('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }
});

describe("explicit complete", function() {

    let property = new ValueCallback<unknown, string>(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        (v) => MessageMap(<Record<PropertyKey, Message>>v)
    );

    let validatable = property.validate('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }

});

