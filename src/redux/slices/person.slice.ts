import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IPerson} from "../../interfaces";
import {personService} from "../../services";
import {ICredits} from "../../interfaces";

interface IState {
    persons: IPerson[];
}

const initialState: IState = {
    persons: []
}

const getAll = createAsyncThunk<ICredits, { movieId: string; }>(
    "personSlice/getAll",
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await personService.getAll(movieId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: "personSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.persons = action.payload.cast;
            })
    }
})

const {reducer: personReducer, actions} = slice;

const personActions = {
    ...actions,
    getAll
};

export {personReducer, personActions}
