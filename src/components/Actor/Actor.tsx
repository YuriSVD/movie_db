import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

import {posterURL, urls} from "../../configs";
import DummyPhoto from "../../dummy_photos/dummy-person.jpg"
import {IActor} from "../../interfaces";

interface IProps {
    actor: IActor;
}

const Actor:FC<IProps> = ({actor}) => {
    const {id, name, profile_path, character} = actor;
    const navigate = useNavigate();
    return (
        <Card sx={{maxWidth: "10.4vw", marginRight: "0.5vw"}}>
            <CardActionArea onClick={() => navigate(`/person/${id}`)}>
                <CardMedia sx={{height: "13.3vw"}}
                    component="img"
                    image={profile_path === null ? DummyPhoto : posterURL + urls.w300PosterSize + profile_path}
                />
                <CardContent>
                    <Typography sx={{fontSize: "1.1vw"}} gutterBottom variant="h6">
                        {name}
                    </Typography>
                    <Typography sx={{fontSize: "0.75vw"}} variant="body2" color="text.secondary">
                        {character}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export {Actor};