import Validators from "../../../dist/validator/validators/validators";
import Validatable from "@dikac/t-validatable/validatable";
import Validator from "@dikac/t-validator/validator";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', ()=>{

    let strict : Validators<Record<PropertyKey, Validator>> = {
        validators : {}
    }

    let optinal : Validators<Partial<Record<PropertyKey, Validator>>> = {
        validators : {}
    }

    optinal.validators = strict.validators;

    // @ts-expect-error
    strict.validators = optinal.validators;

});
