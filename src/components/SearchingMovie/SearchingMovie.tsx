import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {posterURL, urls} from "../../configs";
import {IMovie} from "../../interfaces";
import {ReleaseDate} from "../ReleaseDate";
import DummyPhoto from "../../dummy_photos/dummy-poster.jpg"

interface IProps {
    searchingMovie: IMovie;
}

const SearchingMovie: FC<IProps> = ({searchingMovie}) => {
    const {id, title, poster_path, overview, release_date} = searchingMovie;
    const navigate = useNavigate();

    return (
        <Card sx={{marginBottom: "0.52vw"}}>
            <CardActionArea sx={{display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "80vw"
            }} onClick={() => navigate(`/movies/${id}`)}>
                <CardMedia
                    sx={{height: "7.81vw", width: "5.21vw"}}
                    component={"img"}
                    image={poster_path === null ? DummyPhoto : posterURL + urls.w300PosterSize + poster_path}
                    alt={title}
                />
                <CardContent sx={{paddingTop: 0}}>
                    <Typography variant="h5" component="div">{title}</Typography>
                    <ReleaseDate release_date={release_date}/>
                    <Typography variant="subtitle1">{overview}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export {SearchingMovie};