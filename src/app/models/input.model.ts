import { TInputType } from "../types/input";

export interface IInput {
    id: number;
    name: string;
    type: number;
    typeKey: IInputType;
}

export interface IInputType {
    id: number;
    name: TInputType
}