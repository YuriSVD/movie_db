import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Button} from "@mui/material";
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import {Actor} from "../Actor";
import css from "./Actors.module.css"

const Actors:FC = () => {
    const {actors} = useAppSelector(state => state.personReducer);
    const {movieDetails} = useAppSelector(state => state.movieReducer);
    const navigate = useNavigate();
    return (
        <div>
            <h2>Top Billed Cast</h2>
            <div className={css.PersonsDiv}>
                {actors.slice(0, 10).map(actor => <Actor key={actor.id} actor={actor}/>)}
                <Button onClick={() => {
                    navigate(`/movies/${movieDetails.id}/cast`)
                }}>{<KeyboardArrowRightIcon/>}</Button>
            </div>
        </div>
    );
};

export {Actors};