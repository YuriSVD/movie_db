import React, {FC} from 'react';

import {IGenre} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import css from "./SelectedGenre.module.css";
interface IProps {
    genre: IGenre;
}

const SelectedGenre: FC<IProps> = ({genre}) => {
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const {name} = genre;
    return (
        <button className={css.SelectedGenreDiv} onClick={() => {
            dispatch(genreActions.removeGenreFromList(selectedGenres.indexOf(genre)));
        }}>{name}</button>
    );
};

export {SelectedGenre};