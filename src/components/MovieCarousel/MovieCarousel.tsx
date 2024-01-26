import React, {FC} from 'react';
import {Rating} from "@mui/material";
import {StarBorder} from "@mui/icons-material";

import {IMovie} from "../../interfaces";
import {posterURL, urls} from "../../configs";
import css from "./MovieCarousel.module.css";

interface IProps {
    movie: IMovie;
}

const MovieCarousel: FC<IProps> = ({movie}) => {
    const {title, backdrop_path, vote_average} = movie;
    const poster = posterURL + urls.posterSize + backdrop_path;

    return (
        <div className={css.MovieCarousel} style={{backgroundImage: `url(${poster})`}}>
            <div className={css.info}>
                <h2>{title.toUpperCase()}</h2>
                <div className={css.ratingDiv}>
                    <Rating
                        name={"rating star"}
                        value={vote_average / 2}
                        precision={0.1}
                        max={5}
                        size={"small"}
                        emptyIcon={<StarBorder style={{color: "white"}} fontSize={"inherit"}/>}
                        readOnly/>
                    <div className={css.rating}>
                        {(vote_average / 2).toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
    );
};


export {MovieCarousel};