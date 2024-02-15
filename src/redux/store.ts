import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, personReducer, switchReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    personReducer,
    switchReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type {
    RootState,
    AppStore,
    AppDispatch
};

export {setupStore};