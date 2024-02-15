import React, {FC} from 'react';
import {IActor} from "../../interfaces";
import {posterURL, urls} from "../../configs";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
interface IProps {
    actor: IActor;
}

const Actor:FC<IProps> = ({actor}) => {
    const {name, profile_path, character} = actor;
    const imgPath = posterURL + urls.w300PosterSize + profile_path;
    const navigate = useNavigate();
    return (
        <Card sx={{maxWidth: 200, marginRight: "10px"}}>
            <CardActionArea onClick={() => navigate("/person")}>
                <CardMedia
                    component="img"
                    image={imgPath}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {character}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        /*<div>
            <img src={imgPath} alt={name}/>
            <p>{name}</p>
            <p>{character}</p>
        </div>*/
    );
};

export {Actor};