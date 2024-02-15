import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import {Button, ButtonGroup, InputBase, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React, {FC, useEffect, useRef, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieCarousel} from "../../components/MovieCarousel/MovieCarousel";
import css from "./HomePage.module.css";
import {Movie} from "../../components";


const HomePage: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    const {movies, page, } = useAppSelector(state => state.movieReducer);
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const [offset, setOffset] = useState<number>(0);
    const [rank, setRank] = useState<string>("trending");
    const inputRef = useRef<string>(null);
    const navigate = useNavigate();
    const genresId = selectedGenres.map(genre => genre.id).toString();
    useEffect(() => {
        switch (rank) {
            case "trending":
                dispatch(movieActions.getTrendingMovies());
                break;
            case "toprated":
                dispatch(movieActions.getTopRatedMovies());
                break;
            case "popular":
                dispatch(movieActions.getPopularMovies());
                break;
            case "upcoming":
                dispatch(movieActions.getUpcomingMovies());
                break;
        }
    }, [dispatch, rank, genresId, page]);
    /*setTimeout(() => {
        setOffset(offset - 100);
        if (offset === -(100 * (trendingMovies.length - 1))) {
            setOffset(0);
        }
    }, 2000);*/
    return (
        <>
            <div className={css.CarouselDiv}>
                <div className={css.Carousel} style={{transform: `translateX(${offset}vw)`}}>
                    {movies.map(movie => <MovieCarousel key={movie.id} movie={movie}/>)}
                </div>
                <div className={css.buttonsDiv}>
                    <button className={css.prev} onClick={() => {
                        setOffset(offset + 100);
                        if (offset === 0) {
                            setOffset(-(100 * (movies.length - 1)));
                        }
                    }}>{<ArrowBackIosIcon/>}</button>
                    <button className={css.next} onClick={() => {
                        setOffset(offset - 100);
                        if (offset === -(100 * (movies.length - 1))) {
                            setOffset(0);
                        }
                    }}>{<ArrowForwardIosIcon/>}</button>
                </div>
            </div>
            <Paper component={"form"}
                   sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
                   onSubmit={(event) => {
                       event.preventDefault();
                       if (inputRef.current) {
                           dispatch(movieActions.setSearchingTitle(inputRef.current));
                           navigate("/search");
                       }
                   }}>
                <SearchIcon/>
                    <InputBase sx={{ml: 1, flex: 1}}
                               type="search"
                               placeholder="Search movies by title"
                               fullWidth
                               onChange={(event) => {
                                   inputRef.current = event.target.value;
                               }}
                    />
                <Button type="submit">Search</Button>
            </Paper>
            <ButtonGroup sx={{margin: "20px"}} variant="text">
                <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => {
                    setRank("trending");
                }}>Trending</Button>
                <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => {
                    setRank("toprated");
                }}>Top Rated</Button>
                <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => {
                    setRank("popular");
                }}>New Arrivals</Button>
                <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => {
                    setRank("upcoming");
                }}>Coming Soon</Button>
            </ButtonGroup>
            <div className={css.MoviesDiv}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </>
    );
};

export {HomePage};