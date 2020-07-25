import Empty from "./empty";
import EmptyString from "../validatable/string/empty";

export default function EmptyStandard() : Empty<string> {

    return new Empty(EmptyString);
}
