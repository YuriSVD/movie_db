import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieCarousel} from "../../components/MovieCarousel/MovieCarousel";
import css from "./HomePage.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Button, ButtonGroup, InputBase, Paper} from "@mui/material";
import {Movie} from "../../components";
import SearchIcon from "@mui/icons-material/Search";


const HomePage: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [offset, setOffset] = useState<number>(0);
    const [rank, setRank] = useState<string>("trending");
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
    }, [dispatch, rank]);
    /*setTimeout(() => {
        setOffset(offset - 100);
        if (offset === -(100 * (trendingMovies.length - 1))) {
            setOffset(0);
        }
    }, 2000);*/
    const searchMovies = (event: React.ChangeEvent, value:string) => {
        //console.log(title);
    }
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
                   sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}>
                <SearchIcon/>
                <InputBase sx={{ml: 1, flex: 1}}
                           type="search"
                           placeholder="Search interest movies by title"
                           inputProps={{'aria-label': 'search google maps'}}
                           fullWidth
                           //onChange={searchMovies(value)}
                />
                <Button onClick={() => {
                    console.log("click");
                }}>Search</Button>
            </Paper>
            <ButtonGroup sx={{margin: "20px"}} variant="text">
                <Button onClick={() => {
                    setRank("trending");
                }}>Trending</Button>
                <Button onClick={() => {
                    setRank("toprated");
                }}>Top Rated</Button>
                <Button onClick={() => {
                    setRank("popular");
                }}>New Arrivals</Button>
                <Button onClick={() => {
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