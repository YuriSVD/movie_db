import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IMovieDetails, IPage, IVideoPage, IVideo} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movieDetails: IMovieDetails;
    page: number;
    movies: IMovie[];
    topRatedMovies: IMovie[];
    upcomingMovies: IMovie[];
    trendingMovies: IMovie[];
    popularMovies: IMovie[];
    totalPages: number;
    query: string;
    videos: IVideo[];
    mRank: string;
}

const initialState: IState = {
    movieDetails: null,
    page: 1,
    movies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    trendingMovies: [],
    popularMovies: [],
    totalPages: null,
    query: null,
    videos: [],
    mRank: "trending"
}


const getAll = createAsyncThunk<IPage, { genresId: string, page: number }>(
    "movieSlice/getAll",
    async ({genresId, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(genresId, page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getTopRatedMovies = createAsyncThunk<IPage, void>(
    "movieSlice/getTopRatedMovies",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTopRatedMovies();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getUpcomingMovies = createAsyncThunk<IPage, void>(
    "movieSlice/getUpcomingMovies",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getUpcomingMovies();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getTrendingMovies = createAsyncThunk<IPage, void>(
    "movieSlice/getTrendingMovies",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTrendingMovies();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getPopularMovies = createAsyncThunk<IPage, void>(
    "movieSlice/getPopularMovies",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getPopularMovies();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getMovieDetails = createAsyncThunk<IMovieDetails, { movieId: string }>(
    "movieSlice/getMovieDetails",
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieDetails(movieId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const searchMoviesByName = createAsyncThunk<IPage, { query: string, page: number }>(
    "movieSlice/searchMoviesByName",
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovies(query, page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getVideosByMovieId = createAsyncThunk<IVideoPage, { movieId: string }>(
    "movieSlice/getVideosByMovieId",
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideosByMovieId(movieId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const slice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        pagination: (state, actions) => {
            state.page = actions.payload;
        },
        setSearchingTitle: (state, actions) => {
            state.query = actions.payload;
        },
        setMovieRank: (state, actions) => {
            state.mRank = actions.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.page = action.payload.page;
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(getTopRatedMovies.fulfilled, (state, action) => {
                //state.topRatedMovies = action.payload.results;
                state.movies = action.payload.results;
            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.movieDetails = action.payload;
            })
            .addCase(getUpcomingMovies.fulfilled, (state, action) => {
                //state.upcomingMovies = action.payload.results;
                state.movies = action.payload.results;
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                //state.popularMovies = action.payload.results;
                state.movies = action.payload.results;
            })
            .addCase(getTrendingMovies.fulfilled, (state, action) => {
                //state.trendingMovies = action.payload.results;
                state.movies = action.payload.results;
            })
            .addCase(searchMoviesByName.fulfilled, (state, action) => {
                state.page = action.payload.page;
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(getVideosByMovieId.fulfilled, (state, action) => {
                state.videos = action.payload.results;
            })
    }
})

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getAll,
    getMovieDetails,
    getTopRatedMovies,
    getUpcomingMovies,
    getPopularMovies,
    getTrendingMovies,
    searchMoviesByName,
    getVideosByMovieId
}

export {movieReducer, movieActions}