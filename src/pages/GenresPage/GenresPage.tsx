import {Genres} from "../../components";

import React from 'react';
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    return (
        <div>
            <Genres/>
            <br/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};