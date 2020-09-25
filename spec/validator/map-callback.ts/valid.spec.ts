import MapCallback from "../../../dist/validator/map-callback";
import ValidateMapPartial from "../../../dist/validator/validatable/record/map-partial";
import ValidateMap from "../../../dist/validator/validatable/record/map";
import And from "../../../dist/validatable/and";
import Or from "../../../dist/validatable/or";
import MessageMap from "../../../dist/message/message/record/map";
import Type from "@dikac/t-type/validator/type-standard";
import MapCallbackFunction from "../../../dist/validator/map-callback-function";
import InferReturn from "../../../dist/validator/validatable/record/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
        user : Type('string'),
    };


    let value = {
        user : 'user',
        name : 'name',
        address : 'address',
    };

    let property = new MapCallback<typeof validator, InferReturn<typeof validator>>(validator, ValidateMap, And, MessageMap);

    it(`and validation`, () => {

        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);

        expect(validatable.validatables.name.valid).toBe(true);
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
    });


    it(`or validation`, () => {

        property.validation = (v)=>Or(v);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);

        expect(validatable.validatables.name.valid).toBe(true);
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
    });

});



describe("recursive", function() {



    let validator = {
        name : Type('string'),
        address : Type('string'),
        user : Type('string'),
        info : MapCallbackFunction({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number')
            },
            (value, validators) => ValidateMapPartial(value, validators),
            And, MessageMap)
    };

    let value = {
        name : 'name',
        address : 'age',
        user : 'address',
        info : {
            age : 5,
            hobby : 'string',
            no : 6,
        }
    };

    let property = new MapCallback(validator,
        (value, validators) => ValidateMapPartial(value, validators),
        And,
        MessageMap
    );


    it(`and validation`, () => {

        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toEqual(value);

        if(validatable.validatables.name) {

            expect(validatable.validatables.name.valid).toBe(true);
            expect(typeof validatable.validatables.name.message).toBe('string');

        } else {

            fail('validatable.validatables.name should exist');
        }


        if(validatable.validatables.address) {

            expect(validatable.validatables.address.valid).toBe(true);
            expect(typeof validatable.validatables.address.message).toBe('string');

        } else {

            fail('validatable.validatables.address should exist');
        }


        if(validatable.validatables.user) {

            expect(validatable.validatables.user.valid).toBe(true);
            expect(typeof validatable.validatables.user.message).toBe('string');

        } else {

            fail('validatable.validatables.user should exist');
        }

        // @ts-expect-error
        expect(validatable.validatables.info.valid).toBe(true);

        // @ts-expect-error
        expect(validatable.validatables.info.value).toEqual(value.info);

        // @ts-expect-error
        expect(validatable.validatables.info.validatables.age.valid).toBe(true);
        // @ts-expect-error
        expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

        // @ts-expect-error
        expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
        // @ts-expect-error
        expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

        // @ts-expect-error
        expect(validatable.validatables.info.validatables.no.valid).toBe(true);
        // @ts-expect-error
        expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');

    });

    it(`or validation`, () => {

        property.validation = Or;
        property.validators.info.validation = (v)=>Or(v);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).not.toBe(value);


        if(validatable.validatables.name) {

            expect(validatable.validatables.name.valid).toBe(true);
            expect(typeof validatable.validatables.name.message).toBe('string');

        } else {

            fail('validatable.validatables.name should exist');
        }


        if(validatable.validatables.address) {

            expect(validatable.validatables.address.valid).toBe(true);
            expect(typeof validatable.validatables.address.message).toBe('string');

        } else {

            fail('validatable.validatables.address should exist');
        }


        if(validatable.validatables.user) {

            expect(validatable.validatables.user.valid).toBe(true);
            expect(typeof validatable.validatables.user.message).toBe('string');

        } else {

            fail('validatable.validatables.user should exist');
        }

        // @ts-expect-error
        expect(validatable.validatables.info.valid).toBe(true);
        // @ts-expect-error
        expect(validatable.validatables.info.value).not.toBe(value.info);

        // @ts-expect-error
        expect(validatable.validatables.info.validatables.age.valid).toBe(true);
        // @ts-expect-error
        expect(typeof validatable.validatables.info.validatables.age.message).toBe('string');

        // @ts-expect-error
        expect(validatable.validatables.info.validatables.hobby.valid).toBe(true);
        // @ts-expect-error
        expect(typeof validatable.validatables.info.validatables.hobby.message).toBe('string');

        // @ts-expect-error
        expect(validatable.validatables.info.validatables.no.valid).toBe(true);
        // @ts-expect-error
        expect(typeof validatable.validatables.info.validatables.no.message).toBe('string');
    });

});

