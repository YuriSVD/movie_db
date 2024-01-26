import React, {FC} from 'react';

import {Movies, PaginationComponent} from "../../components";

const MoviePage:FC = () => {
    return (
        <div>
            <Movies/>
            <PaginationComponent/>
        </div>
    );
};

export {MoviePage};