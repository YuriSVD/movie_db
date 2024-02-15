import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {Genre} from "../Genre";
import css from "./Genres.module.css"

const Genres:FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);
    return (
        <div className={css.GenresDiv}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};