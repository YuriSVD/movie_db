import React, {FC} from 'react';

import {IGenre} from "../../interfaces";
import {MovieGenre} from "../MovieGenre";
import css from "./MovieGenres.module.css"
interface IProps {
    genres: IGenre[];
}
const MovieGenres:FC<IProps> = ({genres}) => {
    return (
        <div className={css.MovieGenres}>
            {genres.map(genre => <MovieGenre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {MovieGenres};