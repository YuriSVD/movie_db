import {createSlice} from "@reduxjs/toolkit";

interface IState {
    isDarkMode: boolean;
}

const initialState: IState = {
    isDarkMode: false
}

const slice = createSlice({
    name: "switchSlice",
    initialState,
    reducers: {
        changeMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

const {reducer: switchReducer, actions} = slice;

const switchActions = {
    ...actions
};

export {switchReducer, switchActions}