import React, {FC} from 'react';

import {IGenre} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import css from "./Genre.module.css"

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const {id, name} = genre;
    const navigate = useNavigate();

    return (
        <button className={css.GenreButton} disabled={selectedGenres.includes(genre)} onClick={() => {
            dispatch(genreActions.addGenreToList(genre));
            navigate(id.toString());
        }}>{name}</button>
    );
};

export {Genre};