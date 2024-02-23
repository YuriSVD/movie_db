import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../Movie";
import css from "./Movies.module.css";
const Movies:FC = () => {
    const {page, movies} = useAppSelector(state => state.movieReducer);
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const genresId = selectedGenres.map(genre => genre.id).toString();
    useEffect(() => {
        dispatch(movieActions.getAll({genresId, page}));
    }, [page, dispatch, genresId]);
    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};