import Empty from "./empty";
import EmptyString from "../validatable/string/empty";
import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/instance";

export default function EmptyStandard() : Validator<object, object, Instance<object, string>> {

    return new Empty(EmptyString);
}
