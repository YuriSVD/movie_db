import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IActor, ICrewMember} from "../../interfaces";
import {personService} from "../../services";
import {ICredits} from "../../interfaces";

interface IState {
    actors: IActor[];
    crewMembers: ICrewMember[];
}

const initialState: IState = {
    actors: [],
    crewMembers: []
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
                state.actors = action.payload.cast;
                state.crewMembers = action.payload.crew;
            })
    }
})

const {reducer: personReducer, actions} = slice;

const personActions = {
    ...actions,
    getAll
};

export {personReducer, personActions}
