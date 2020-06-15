/**
 * Assign {@param source} to {@param target}
 * {@param source} must have the same or partial type of {@param source}
 */
export default function StrictAssign<Target extends object, Source extends Partial<Target> = Partial<Target>>(target: Target, source: Source): Source & Omit<Target, keyof Source>;
