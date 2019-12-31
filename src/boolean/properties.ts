/**
 * check if property exists
 */
export default function Properties (object : object, ...properties : string[]) : boolean {

    for (let property of properties) {

        if(!(property in object)) {

            return false;
        }
    }

    return true;
}