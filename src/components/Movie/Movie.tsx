import React, {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {posterURL, urls} from "../../configs";
import css from "./Movie.module.css";
import {Button, Rating} from '@mui/material';
import {StarBorder} from "@mui/icons-material";

interface IProps {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, vote_average, overview, poster_path, release_date} = movie;
    const poster = posterURL + urls.posterSize + poster_path;
    const navigate = useNavigate();
    const date = new Date(release_date).toDateString();
    return (
        <div className={css.Box}>
            <Link to={`/movies/${id}`} className={css.MovieDiv}>
                <img src={poster} alt={title}/>
                <div className={css.info}>
                    <h4>{title}</h4>
                    <div>{release_date}</div>
                </div>
            </Link>
            <div className={css.details}>
                <h2>{title}</h2>
                <h3>{date.substring(date.indexOf(" ") + 1, date.length)}</h3>
                <div className={css.ratingDiv}>
                    <Rating name={"rating star"}
                            value={vote_average}
                            precision={0.1}
                            max={10}
                            size={"small"}
                            emptyIcon={<StarBorder sx={{color: "white"}} fontSize={"inherit"}/>}
                            readOnly/>
                    <div className={css.rating}>{vote_average}</div>
                </div>
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