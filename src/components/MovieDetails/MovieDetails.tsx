import {Button, Typography} from "@mui/material";
import React, {FC, useEffect, useState} from 'react';
import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";

import {Actors} from "../Actors";
import {posterURL, urls, youtubeURL} from "../../configs";
import DummyPhoto from "../../dummy_photos/dummy-poster.jpg";
import DummyBackground from "../../dummy_photos/dummy-background.jpg";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from "./MovieDetails.module.css"
import {MovieGenres} from "../MovieGenres";
import {RatingStar} from "../RatingStar";
import {movieActions, personActions} from "../../redux";
import {ReleaseDate} from "../ReleaseDate";
import {Videos} from "../Videos";

const MovieDetails: FC = () => {
    const {movieId} = useParams();
    const {movieDetails, videos} = useAppSelector(state => state.movieReducer);
    const {crewMembers} = useAppSelector(state => state.personReducer);
    const dispatch = useAppDispatch();
    const trailer = videos.find(video => video.type === "Trailer");
    const [playTrailer, setPlayTrailer] = useState<boolean>(false);
    useEffect(() => {
        dispatch(movieActions.getMovieDetails({movieId}));
        dispatch(personActions.getAll({movieId}));
        dispatch(movieActions.getVideosByMovieId({movieId}));
    }, [movieId, dispatch]);

    const directors = crewMembers.filter(crewMembers =>
        crewMembers.job === "Director").map(director => director.name);
    return (
        <>
            {movieDetails &&
                <div>
                    <div className={css.movieDiv}
                         style={{backgroundImage: movieDetails.backdrop_path === null ? DummyBackground : `url(${posterURL}${urls.originalPosterSize}${movieDetails.backdrop_path})`}}>
                        <div className={css.zIndex1}>
                            <img src={movieDetails.poster_path === null ? DummyPhoto : posterURL + urls.w300PosterSize + movieDetails.poster_path} alt={movieDetails.title}/>
                        </div>
                        {trailer && <div className={`${css.mainInfo} ${css.zIndex1}`}>
                            <ReactPlayer className={css.trailer}
                                         style={{visibility: playTrailer ? "visible" : "hidden"}}
                                         playing={playTrailer}
                                         controls={true}
                                         url={`${youtubeURL}${urls.watch}${trailer.key}`}
                                         width={"56.67vw"}
                                         height={"31.98vw"}
                                         onEnded={() => {
                                             setPlayTrailer(false);
                                         }}/>
                            <Typography variant="h3">{movieDetails.title}</Typography>
                            <RatingStar rating={movieDetails.vote_average}/>
                            <MovieGenres genres={movieDetails.genres}/>
                            <Typography align={"justify"} variant="subtitle1">{movieDetails.overview}</Typography>
                        </div>}
                        <div className={`${css.secondaryInfo} ${css.zIndex1}`}>
                            <Typography className={css.bold} variant={"body1"}>{directors.join(", ")}</Typography>
                            <Typography gutterBottom variant={"body2"}>Director</Typography>
                            <ReleaseDate release_date={movieDetails.release_date}/>
                            <Typography gutterBottom variant={"body2"}>Release Date</Typography>
                            <Typography className={css.bold} variant="body1">
                                {`${Math.floor(movieDetails.runtime / 60)}h ${movieDetails.runtime % 60}m`}
                            </Typography>
                            <Typography gutterBottom variant={"body2"}>Run Time</Typography>
                            <Typography className={css.bold} variant="body1">
                                {movieDetails.budget.toLocaleString() + "$"}
                            </Typography>
                            <Typography gutterBottom variant={"body2"}>Budget</Typography>
                            <Typography className={css.bold} variant="body1">
                                {movieDetails.revenue.toLocaleString() + "$"}
                            </Typography>
                            <Typography gutterBottom variant={"body2"}>Revenue</Typography>
                            <Button sx={{color: "white", borderColor: "white"}} variant="outlined" onClick={() => {
                                setPlayTrailer(prevState => !prevState);
                            }}>{playTrailer ? "Stop Trailer" : "Play Trailer"}</Button>
                        </div>
                        <div className={css.overlay}></div>
                    </div>
                    <Actors/>
                    <Videos/>
                </div>
            }
        </>
    );
};

export {MovieDetails};