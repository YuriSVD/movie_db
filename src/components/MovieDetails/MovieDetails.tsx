import React, {FC, useEffect} from 'react';

import {posterURL, urls} from "../../configs";
import css from "./MovieDetails.module.css"
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions, personActions} from "../../redux";
import {Persons} from "../Persons";
import {Rating} from "@mui/material";
const MovieDetails: FC = () => {
    const {movieId} = useParams();
    const {movieDetails} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieActions.getMovieDetails({movieId}));
        dispatch(personActions.getAll({movieId}));
    }, [movieId, dispatch]);
    return (
        <>
            {movieDetails &&
                <div className={css.MovieDiv}>
                    <img src={posterURL + urls.posterSize + movieDetails.poster_path} alt=""/>
                    <h4>{movieDetails.id}</h4>
                    <h4>{movieDetails.title}</h4>
                    <div>{movieDetails.release_date}</div>
                    <div>
                        <Rating name={"rating star"} value={movieDetails.vote_average} precision={0.1} max={10} readOnly/>
                        {movieDetails.vote_average}
                    </div>
                    <div>{movieDetails.genres.map(genre => <div key={genre.id}>{genre.name}</div>)}</div>
                    <p>{movieDetails.overview}</p>
                    <Persons/>
                </div>
            }
        </>
    );
};

export {MovieDetails};