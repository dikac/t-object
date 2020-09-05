import Container from "./container";
/**
 * create simple {@see Container} without context & option
 */
export default function Simple<Type extends object>(): Container<Type, void, void>;
