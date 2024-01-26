import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs";
import {ICredits} from "../interfaces/credits.interface";
import {IRes} from "../types";

const personService = {
    getAll : (id: string): IRes<ICredits> => axiosService.get(`${urls.movie}/${id}${urls.credits}${apiKey}`)
}

export {personService};