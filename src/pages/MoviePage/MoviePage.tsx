import React, {FC} from 'react';

import {Genres, Movies, PaginationComponent, VoteSlider} from "../../components";
import css from "./MoviePage.module.css";
import {Typography} from "@mui/material";
import {useAppSelector} from "../../hooks";

const MoviePage: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    return (
        <div className={css.MoviePage}>
            <div>
                <Typography style={{color: isDarkMode ? "white" : "#1976d2"}}>Genres:</Typography>
                <Genres/>
                <Typography style={{color: isDarkMode ? "white" : "#1976d2"}}>Vote Rating:</Typography>
                <VoteSlider/>
            </div>
            <div>
                <Movies/>
                <PaginationComponent/>
            </div>
        </div>
    );
};

export {MoviePage};