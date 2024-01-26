import {createSlice} from "@reduxjs/toolkit";


interface IState {
    page: number;
}

const initialState: IState = {
    page: 1,
}

const slice = createSlice({
    name: "paginationSlice",
    initialState,
    reducers: {
        pagination: (state, actions) => {
            state.page = actions.payload;
        }
    }
})