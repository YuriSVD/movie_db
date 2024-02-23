import {Button, Typography} from '@mui/material';
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {posterURL, urls} from "../../configs";
import {IMovie} from "../../interfaces";
import css from "./Movie.module.css";
import {RatingStar} from "../RatingStar";
import {ReleaseDate} from "../ReleaseDate";
import DummyPhoto from "../../dummy_photos/dummy-poster.jpg";

interface IProps {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, vote_average, overview, poster_path, release_date} = movie;
    const navigate = useNavigate();
    return (
        <div className={css.Movie}>
            <div className={css.posterDiv}>
                <img src={poster_path === null ? DummyPhoto : posterURL + urls.w300PosterSize + poster_path}
                     alt={title}/>
            </div>
            <div className={css.details}>
                <div className={css.xxx}>
                    <Typography gutterBottom variant={"h5"}>{title}</Typography>
                    <ReleaseDate release_date={release_date}/>
                    <RatingStar rating={vote_average}/>
                    <Typography gutterBottom align={"justify"} variant={"body1"}>{overview}</Typography>
                </div>
                <Button sx={{color: "white", borderColor: "white"}} variant="outlined"
                        onClick={() => {
                            navigate(`/movies/${id}`);
                        }}>View Info</Button>
            </div>
        </div>
    );
};

export {Movie};