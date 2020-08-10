import Empty from "./empty";
import EmptyString from "../validatable/string/empty";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function EmptyStandard() : Validator<object, object, boolean, boolean, Instance<object, string>> {

    return new Empty(EmptyString);
}
