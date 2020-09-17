import ValidateMap from "./validatable/record/map-partial";
import MapCallback from "./map-callback";
export default function MapPartial(validators, validation, message) {
    return new MapCallback(validators, (value, validators) => ValidateMap(value, validators), validation, message);
}
//# sourceMappingURL=map-partial.js.map