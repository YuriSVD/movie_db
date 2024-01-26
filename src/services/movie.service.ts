import {IRes} from "../types";
import {IMovieDetails, IPage} from "../interfaces";
import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs";

const movieService = {
    getAll: (with_genres: string, page: number): IRes<IPage> => axiosService.get(urls.discover + urls.movie + apiKey, {params: {with_genres, page}}),
    getTopRatedMovies: (): IRes<IPage> => axiosService.get(urls.movie + urls.top_rated + apiKey),
    getUpcomingMovies: (): IRes<IPage> => axiosService.get(urls.movie + urls.upcoming + apiKey),
    getTrendingMovies: (): IRes<IPage> => axiosService.get(urls.movie + urls.now_playing + apiKey),
    getPopularMovies: (): IRes<IPage> => axiosService.get(urls.movie + urls.popular + apiKey),
    getMovieDetails: (id: string): IRes<IMovieDetails> => axiosService.get(`${urls.movie}/${id}${apiKey}`),
    searchMovies:(query: string, page: number): IRes<IPage> => axiosService.get(urls.search + urls.movie + apiKey, {params: {query, page}})
}

export {movieService};