import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {posterURL, urls} from "../../configs";
import css from "./MovieCarousel.module.css";
import {RatingStar} from "../RatingStar";

interface IProps {
    movie: IMovie;
}

const MovieCarousel: FC<IProps> = ({movie}) => {
    const {title, backdrop_path, vote_average} = movie;
    const poster = posterURL + urls.originalPosterSize + backdrop_path;

    return (
        <div className={css.MovieCarousel} style={{backgroundImage: `url(${poster})`}}>
            <div className={css.info}>
                <h2>{title.toUpperCase()}</h2>
                <RatingStar rating={vote_average}/>
            </div>
        </div>
    );
};


export {MovieCarousel};