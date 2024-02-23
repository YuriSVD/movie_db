import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React, {FC} from 'react';
import {IActor} from "../../interfaces";

import {posterURL, urls} from "../../configs";
import DummyPhoto from "../../dummy_photos/dummy-person.jpg";
import {useNavigate} from "react-router-dom";

interface IProps {
    actor: IActor;
}

const CastMember:FC<IProps> = ({actor}) => {
    const {id, name, character, profile_path} = actor;
    const navigate = useNavigate();

    return (
        <Card sx={{marginBottom: "0.5vw"}}>
            <CardActionArea sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "20vw",
                height: "7.8vw"
                }} onClick={() => navigate(`/person/${id}`)}>
                <CardMedia
                    sx={{height: "7.8vw", width: "5.2vw"}}
                    component={"img"}
                    image={profile_path === null ? DummyPhoto : posterURL + urls.w300PosterSize + profile_path}
                    alt={name}
                />
                <CardContent>
                    <Typography sx={{fontSize: "1.25vw"}} variant={"h5"}>{name}</Typography>
                    <Typography sx={{fontSize: "0.83vw"}} variant={"subtitle1"}>{character}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export {CastMember};