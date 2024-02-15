import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {posterURL, urls} from "../../configs";
import css from "./Movie.module.css";
import {Button} from '@mui/material';
import {RatingStar} from "../RatingStar";
import {ReleaseDate} from "../ReleaseDate";

interface IProps {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, vote_average, overview, poster_path, release_date} = movie;
    const poster = posterURL + urls.w300PosterSize + poster_path;
    const navigate = useNavigate();
    return (
        <div className={css.Box}>
            <div className={css.MovieDiv}>
                <img src={poster} alt={title}/>
            </div>
            <div className={css.details}>
                <h2>{title}</h2>
                <ReleaseDate release_date={release_date}/>
                <RatingStar rating={vote_average}/>
                <p style={{textAlign: "justify"}}>{overview}</p>
                <Button variant="outlined" sx={{color: "white", borderColor: "white"}}
                        onClick={() => {
                            navigate(`/movies/${id}`);
                        }}>View Info</Button>
            </div>
        </div>
    );
};

export {Movie};