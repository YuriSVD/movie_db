import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../Movie";
import {SelectedGenre} from "../SelectedGenre";
import css from "../Movies/Movies.module.css"
const GenreMovies: FC = () => {
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const {page, movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const genresId = selectedGenres.map(genre => genre.id).toString();
    useEffect(() => {
        dispatch(movieActions.getAll({genresId, page}))
    }, [dispatch, page, genresId]);
    console.log(movies);
    return (
        <div>
            <div>
                <h3>Selected genres</h3>
                {selectedGenres.map(genre => <SelectedGenre key={genre.id} genre={genre}/>)}
            </div>
            <div className={css.MoviesDiv}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {GenreMovies};