export default function AssignUndefined<Object>(target : Partial<Object>, source : Object) : Object {

    for (let property in source) {

        if(target[property] === undefined) {

            target[property] = source[property];
        }
    }

    return <Object>target;
}