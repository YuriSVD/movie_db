import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layots";
import {CastPage, HomePage, MoviePage, MoviesDetailsPage, PersonPage, SearchPage, VideosPage} from "./pages";


const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={"home"}/>
            },
            {
                path: "home", element: <HomePage/>
            },
            {
                path: "movies", element: <MoviePage/>
            },
            {
                path: "movies/:movieId", element: <MoviesDetailsPage/>
            },
            {
                path: "search", element: <SearchPage/>
            },
            {
                path: "movies/:movieId/cast", element: <CastPage/>
            },
            {
                path: "movies/:movieId/videos", element: <VideosPage/>
            },
            {
                path: "person/:personId", element: <PersonPage/>
            }
        ]
    }
]);

export {router}