import {Button, Typography} from "@mui/material";
import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {RatingStar} from "../RatingStar";

import {posterURL, urls, youtubeURL} from "../../configs";
import css from "./MovieDetails.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions, personActions} from "../../redux";
import {Actors} from "../Actors";
import {ReleaseDate} from "../ReleaseDate";
import {MovieGenres} from "../MovieGenres";
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
        dispatch(movieActions.getVideosByMovieId({movieId}))
    }, [movieId, dispatch]);

    const directors = crewMembers.filter(crewMembers =>
        crewMembers.job === "Director").map(director => director.name);

    console.log(directors.join(", "));

    return (
        <>
            {movieDetails && trailer &&
                <div>
                    <div className={css.MovieDiv}
                         style={{backgroundImage: `url(${posterURL}${urls.originalPosterSize}${movieDetails.backdrop_path})`}}>
                        <div className={css.zIndex1}>
                            <img src={posterURL + urls.w300PosterSize + movieDetails.poster_path} alt=""/>
                        </div>
                        <div className={`${css.mainInfo} ${css.zIndex1}`}>
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
                            <Typography style={{textAlign: "justify"}}
                                        variant="subtitle1">{movieDetails.overview}</Typography>
                        </div>
                        <div className={`${css.secondaryInfo} ${css.zIndex1}`}>
                            <Typography style={{fontWeight: "bold"}}
                                        variant={"body1"}>{directors.join(", ")}</Typography>
                            <Typography style={{marginBottom: "10px"}} variant={"body2"}>Director</Typography>
                            <ReleaseDate release_date={movieDetails.release_date}/>
                            <Typography style={{marginBottom: "10px"}} variant={"body2"}>Release Date</Typography>
                            <Typography style={{fontWeight: "bold"}} variant="body1">
                                {`${Math.floor(movieDetails.runtime / 60)}h ${movieDetails.runtime % 60}m`}
                            </Typography>
                            <Typography style={{marginBottom: "10px"}} variant={"body2"}>Run Time</Typography>
                            <Typography style={{fontWeight: "bold"}} variant="body1">
                                {movieDetails.budget.toLocaleString() + "$"}
                            </Typography>
                            <Typography style={{marginBottom: "10px"}} variant={"body2"}>Budget</Typography>
                            <Typography style={{fontWeight: "bold"}} variant="body1">
                                {movieDetails.revenue.toLocaleString() + "$"}
                            </Typography>
                            <Typography style={{marginBottom: "10px"}} variant={"body2"}>Revenue</Typography>
                            <Button style={{color: "white", borderColor: "white"}} variant="outlined" onClick={() => {
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