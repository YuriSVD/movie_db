import {IGenre} from "./genre.interface";
import {IMovie} from "./movie.interface";

export interface IMovieDetails extends IMovie{
    genres: IGenre[];
}