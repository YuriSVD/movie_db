import {Typography} from "@mui/material";
import React, {FC} from 'react';

import {IGenre} from "../../interfaces";
interface IProps {
    genre: IGenre
}

const MovieGenre: FC<IProps> = ({genre}) => {
    return (
        <Typography variant="body2">
            {genre.name.toUpperCase()}
        </Typography>
    );
};

export {MovieGenre};