import {IPerson} from "./index";

export interface ICredits {
    id: number;
    cast: IPerson[];
    crew: IPerson[];
}