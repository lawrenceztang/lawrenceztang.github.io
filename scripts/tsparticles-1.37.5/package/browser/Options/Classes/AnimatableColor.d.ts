import type { IAnimatableColor } from "../Interfaces/IAnimatableColor";
import { OptionsColor } from "./OptionsColor";
import type { RecursivePartial, SingleOrMultiple } from "../../Types";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import { HslAnimation } from "./HslAnimation";
/**
 * [[include:Options/Particles/Color.md]]
 * @category Options
 */
export declare class AnimatableColor extends OptionsColor implements IAnimatableColor, IOptionLoader<IAnimatableColor> {
    animation: HslAnimation;
    constructor();
    static create(source?: AnimatableColor, data?: SingleOrMultiple<string> | RecursivePartial<IAnimatableColor>): AnimatableColor;
    load(data?: RecursivePartial<IAnimatableColor>): void;
}
