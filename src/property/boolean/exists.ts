import {Required} from "utility-types";

/**
 * check if property exists
 */

export default function Exists<
    ObjectType extends object,
    Key extends keyof ObjectType,
>(
     object : ObjectType,
     property : Key
) : object is (Key extends keyof ObjectType ? Required<ObjectType, Key> : ObjectType);

export default function Exists<
    ObjectType extends object,
    Key extends PropertyKey
>(
    object : ObjectType,
    property : Key
) : object is ObjectType & Record<Key, any>;

export default function Exists<
    ObjectType extends object,
    Key extends PropertyKey
>(
    object : ObjectType,
    property : Key
) : boolean {

     return property in object;
}
