export default function HasProperties (object : object, ...properties : string[]) : boolean {

    for (let property of properties) {

        if(!(property in object)) {

            return false;
        }
    }

    return true;
}