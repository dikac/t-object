import ValidateMap from "./validatable/record/map";
import MapCallback from "./map-callback";
export default function MapAll(validators, validation, message) {
    return new MapCallback(validators, ValidateMap, validation, message);
}
//# sourceMappingURL=map-all.js.map