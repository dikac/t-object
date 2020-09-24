import {Union} from "ts-toolbelt";

type NonNullable<Type extends object> =  {
    [Key in keyof Type] : Union.Exclude<Type[Key], null>
}

export default NonNullable;
