import Set from "./set/set";
import Get from "./get/get";
export default function Merge(destination: Get | Set, source: Get | Set): Get | Set | (Get & Set);
