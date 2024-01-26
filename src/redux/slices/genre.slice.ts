import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenres} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[];
    selectedGenres: IGenre[];
}

const initialState: IState = {
    genres: [],
    selectedGenres: []
}

const getAll = createAsyncThunk<IGenres, void>(
    "genreSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

/*const getMoviesByGenre = createAsyncThunk<IPage, { genresId: string, page: number; }>(
    "genreSlice/getMoviesByGenre",
    async ({genresId, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getMoviesByGenre(genresId, page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);*/

const slice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        addGenreToList: (state, actions) => {
            state.selectedGenres.push(actions.payload);
        },
        removeGenreFromList: (state, actions) => {
            state.selectedGenres.splice(actions.payload, 1);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            /*.addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.page = action.payload.page;
                state.movies = action.payload.results;
            })*/
    }
})

const {reducer: genreReducer, actions} = slice;

const genreActions = {
    ...actions,
    getAll,
    //getMoviesByGenre
};

export {genreReducer, genreActions}