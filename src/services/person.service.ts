import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs";
import {ICredits, IPersonDetails} from "../interfaces";
import {IRes} from "../types";

const personService = {
    getAll : (id: string): IRes<ICredits> => axiosService.get(`${urls.movie}/${id}${urls.credits}${apiKey}`),
    getPersonDetailsById: (id: string):IRes<IPersonDetails> => axiosService.get(`${urls.person}/${id}${apiKey}`)
}

export {personService};