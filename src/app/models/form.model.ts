import { IStage } from "./stage.model";

export interface IForm {
    id: number;
    name: string;
    stages: Array<IStage>
}