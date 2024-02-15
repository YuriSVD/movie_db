import {IActor, ICrewMember} from "./index";

export interface ICredits {
    id: number;
    cast: IActor[];
    crew: ICrewMember[];
}