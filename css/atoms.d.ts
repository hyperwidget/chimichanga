import { Sprinkles } from "./sprinkles.css";
export interface Atoms extends Sprinkles {
    reset?: keyof JSX.IntrinsicElements;
    className?: string | string[];
}
export declare function atoms(atoms: Atoms): string;
export declare const extractAtoms: <P extends object>(props: P) => any[];
