import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout, HomePage, MoviePage, GenresPage} from "./pages";
import {MovieDetails} from "./components";
import {GenreMoviesPage} from "./pages/GenreMoviesPage";

function App() {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"home"}/>}/>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"movies"} element={<MoviePage/>}/>
                <Route path={"movies/:movieId"} element={<MovieDetails/>}/>
                <Route path={"genres"} element={<GenresPage/>}>
                    <Route path={":genresId"} element={<GenreMoviesPage/>}/>
                </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
