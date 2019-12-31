
export type Validator<Type extends object> = {[Key in keyof Type] : (value : Type[Key])=>boolean};

export default function Structure<Type extends object>(
    value : any,
    validators : Validator<Type>
) : value is Type {

    for (let property in validators) {

        let validator = validators[property];

        if(!validator(value[property])) {

            return false;
        }

    }

    return true;
}