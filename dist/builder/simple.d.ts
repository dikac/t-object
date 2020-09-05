import Builder from "./builder";
/**
 * create simple {@see Builder} without context & option
 */
export default function Simple<Type extends object>(): Builder<Type, void, void>;
