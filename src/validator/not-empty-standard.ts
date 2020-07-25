import NotEmpty from "./not-empty";
import NotEmptyString from "../validatable/string/not-empty";

export default function NotEmptyStandard() : NotEmpty<string> {

    return new NotEmpty(NotEmptyString);
}
