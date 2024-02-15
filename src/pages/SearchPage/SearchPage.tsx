import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {PaginationComponent, SearchingMovie} from "../../components";
import {movieActions} from "../../redux";
import css from "./SearchPage.module.css"

const SearchPage:FC = () => {
    const {movies, page, query} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
            dispatch(movieActions.searchMoviesByName({query, page}))
    }, [dispatch, page, query]);
    console.log(movies);
    return (
        <div className={css.SearchDiv}>
            {movies.map(movie => <SearchingMovie key={movie.id} searchingMovie={movie}/>)}
            <PaginationComponent/>
        </div>
    );
};

export {SearchPage};