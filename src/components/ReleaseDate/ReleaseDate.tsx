import React, {FC} from 'react';
import {Typography} from "@mui/material";

interface IProps {
    release_date: string;
}

const ReleaseDate: FC<IProps> = ({release_date}) => {
    const date = new Date(release_date).toDateString();
    return (
        <Typography style={{fontWeight: "bold"}} variant="body1">
            {date.substring(date.indexOf(" ") + 1, date.length)}
        </Typography>
    );
};

export {ReleaseDate};