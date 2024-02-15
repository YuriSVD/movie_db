import React, {FC, useState} from 'react';

import {IGenre} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {Chip} from "@mui/material";

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const [selected, setSelected] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const {name} = genre;
    return (
        <Chip label={name} style={{color: isDarkMode ? "white" : selected ? "white" : "#1976d2"}} color="primary" variant={selected ? "filled" : "outlined"} onClick={() => {
            setSelected((prev) => !prev);
            selectedGenres.includes(genre) ? dispatch(genreActions.removeGenreFromList(selectedGenres.indexOf(genre))) :
            dispatch(genreActions.addGenreToList(genre));
        }}/>
    );
};

export {Genre};