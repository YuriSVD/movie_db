import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout, HomePage, MoviePage, SearchPage, CastPage} from "./pages";
import {MovieDetails} from "./components";

function App() {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"home"}/>}/>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"movies"} element={<MoviePage/>}/>
                <Route path={"movies/:movieId"} element={<MovieDetails/>}/>
                <Route path={"search"} element={<SearchPage/>}/>
                <Route path={"movies/:movieId/cast"} element={<CastPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
