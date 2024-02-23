import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Button, Typography} from "@mui/material";
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import {Actor} from "../Actor";
import css from "./Actors.module.css"

const Actors:FC = () => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    const {actors} = useAppSelector(state => state.personReducer);
    const {movieDetails} = useAppSelector(state => state.movieReducer);
    const navigate = useNavigate();
    return (
        <div>
            <Typography style={{color: isDarkMode ? "white" : "black"}} variant={"h5"}>Top Billed Cast</Typography>
            <div className={css.personsDiv}>
                {actors.slice(0, 10).map(actor => <Actor key={actor.id} actor={actor}/>)}
                <Button style={{color: isDarkMode ? "white" : "#1976d2"}} onClick={() => {
                    navigate(`/movies/${movieDetails.id}/cast`)
                }}>{<KeyboardArrowRightIcon/>}</Button>
            </div>
        </div>
    );
};

export {Actors};