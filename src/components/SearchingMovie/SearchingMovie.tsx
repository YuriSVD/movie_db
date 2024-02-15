import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {posterURL, urls} from "../../configs";
import {ReleaseDate} from "../ReleaseDate";
import {useNavigate} from "react-router-dom";

interface IProps {
    searchingMovie: IMovie;
}

const SearchingMovie: FC<IProps> = ({searchingMovie}) => {
    const {id, title, poster_path, overview, release_date} = searchingMovie;
    const navigate = useNavigate();
    return (
        <Card style={{marginBottom: "10px"}}>
            <CardActionArea style={{display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "80vw"
            }} onClick={() => navigate(`/movies/${id}`)}>
                <CardMedia
                    style={{height: "150px", width: "100px"}}
                    component="img"
                    image={posterURL + urls.w300PosterSize + poster_path}
                    alt={title}
                />
                <CardContent style={{paddingTop: 0}}>
                    <Typography variant="h5" component="div">{title}</Typography>
                    <ReleaseDate release_date={release_date}/>
                    <Typography variant="subtitle1">{overview}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export {SearchingMovie};