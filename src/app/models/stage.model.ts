import { IInput } from "./input.model";

export interface IStage {
    id: number;
    name: string;
    inputs: Array<IInput>
}