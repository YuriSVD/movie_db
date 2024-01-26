import React, {FC} from 'react';

import {GenreMovies, PaginationComponent} from "../../components";

const GenreMoviesPage:FC = () => {

    return (
        <div>
            <GenreMovies/>
            <PaginationComponent/>
        </div>
    );
};

export {GenreMoviesPage};