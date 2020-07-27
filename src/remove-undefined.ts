export default function RemoveUndefined<Entity extends object>(
    entity : Entity,
)  : Partial<Entity> {

    for(let property in entity) {

        if(entity[property] === undefined) {

            delete entity[property];
        }
    }

    return entity;
}
