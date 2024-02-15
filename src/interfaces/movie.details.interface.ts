import {IGenre} from "./genre.interface";
import {IMovie} from "./movie.interface";

export interface IMovieDetails extends IMovie{
    runtime: number;
    budget: number;
    revenue: number;
    genres: IGenre[];
}