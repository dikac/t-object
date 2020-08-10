import Type from "@dikac/t-type/validator/type-standard";
import ValueAll from "../../../../dist/validator/value";
import ValueCallback from "../../../../dist/validator/value-callback";
import MapAll from "../../../../dist/validator/map";
import MapCallback from "../../../../dist/validator/map-callback";
import Value from "../../../../dist/validator/value";
import Map from "../../../../dist/validator/map";
import And from "../../../../dist/validatable/and";
import Invalid from "../../../../dist/message/message/record/invalid";
import MessageMap from "../../../../dist/message/message/record/map";
import ValidatorValidatable from "../../../../dist/validator/validatable/record/infer";
import ValidateMapPartial from "../../../../dist/validator/validatable/record/map-partial";
import ValidateValuePartial from "../../../../dist/validator/validatable/record/value-partial";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => {spyOn(console, 'log').and.callThrough();});


describe("value all", function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: ValueAll({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = ValueAll(validator, (v)=>And(v), Invalid);
});


describe("value partial", function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info:  Value({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property =  Value(validator, (v)=>And(v), Invalid);
});


describe("value callback", function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
        user : Type('string'),
        info : new ValueCallback({
                age : Type('string'),
                hobby : Type('string'),
                no : Type('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
            And,
            Invalid
        )
    };

    let property = new ValueCallback(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
        And,
        Invalid
    );
});


describe("value all", function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: MapAll({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = MapAll(validator, (v)=>And(v), Invalid);
});


describe("value partial", function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: Map({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = Map(validator, (v)=>And(v), Invalid);
});


describe("value callback", function() {

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
        info : new MapCallback({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number')
            },
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial(value, validators),
            And, MessageMap)
    };

    let value = {
        name : 'name',
        age : "15",
        address : 'address',
        info : {
            age : 5,
            hobby : 'string',
            no : 6,
        }
    };

    let property = new MapCallback(validator,
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateMapPartial(value, validators),
        And,
        MessageMap
    );
});
