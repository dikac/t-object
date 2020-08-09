import Validatables from "../../../dist/validatable/validatables/validatables";
import Validatable from "@dikac/t-validatable/validatable";
import Union from "../../../dist/union";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', ()=>{

    let strict : Validatables<Record<PropertyKey, Validatable>> = {
        validatables : {}
    }

    let optinal : Validatables<Union<Record<PropertyKey, Validatable>>> = {
        validatables : {}
    }

    optinal.validatables = strict.validatables;

    strict.validatables = optinal.validatables;

});
