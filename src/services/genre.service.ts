import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs";

const genreService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre + urls.movie + urls.list + apiKey),
}

export {genreService}