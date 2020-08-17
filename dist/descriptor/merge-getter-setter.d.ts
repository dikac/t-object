import Setter from "./setter";
import Getter from "./getter";
export default function MergeGetterSetter(destination: Getter | Setter, source: Getter | Setter): Getter | Setter | (Getter & Setter);
