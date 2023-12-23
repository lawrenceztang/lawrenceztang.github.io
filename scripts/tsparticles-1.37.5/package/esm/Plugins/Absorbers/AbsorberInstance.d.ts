import type { ICoordinates, IRgb } from "../../Core/Interfaces";
import type { Container } from "../../Core/Container";
import type { Particle } from "../../Core/Particle";
import type { IAbsorber } from "./Options/Interfaces/IAbsorber";
import type { Absorbers } from "./Absorbers";
import { Vector } from "../../Core/Particle/Vector";
import { RotateDirection } from "../../Enums";
import { IAbsorberSizeLimit } from "./Options/Interfaces/IAbsorberSizeLimit";
declare type OrbitingParticle = Particle & {
    absorberOrbit?: Vector;
    absorberOrbitDirection?: RotateDirection;
    needsNewPosition?: boolean;
};
export declare class AbsorberInstance {
    private readonly absorbers;
    private readonly container;
    mass: number;
    opacity: number;
    size: number;
    color: IRgb;
    limit: IAbsorberSizeLimit;
    readonly name?: string;
    position: Vector;
    private dragging;
    private readonly initialPosition?;
    private readonly options;
    constructor(absorbers: Absorbers, container: Container, options: IAbsorber, position?: ICoordinates);
    attract(particle: OrbitingParticle): void;
    resize(): void;
    draw(context: CanvasRenderingContext2D): void;
    private calcPosition;
    private updateParticlePosition;
}
export {};
