import {Button, ButtonGroup} from "@mui/material";
import React, {FC, useState} from 'react';

import { Video } from '../../components';
import {useAppSelector} from "../../hooks";
import css from "./VideosPage.module.css";

const VideosPage: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    const {videos} = useAppSelector(state => state.movieReducer);
    const [typeOfVideos, setTypeOfVideos] = useState<string>("Trailer")
    const reduce = videos.reduce((accumulator, video) => {
        switch (video.type) {
            case "Featurette":
                accumulator.featurette.push(video);
                break;
            case "Teaser":
                accumulator.teaser.push(video);
                break;
            case "Behind the Scenes":
                accumulator.behindTheScenes.push(video);
                break;
            case "Clip":
                accumulator.clip.push(video);
                break;
            case "Trailer":
                accumulator.trailer.push(video);
                break;
            case "Blooper":
                accumulator.blooper.push(video);
                break;
        }
        return accumulator;
    }, {
        featurette: [],
        teaser: [],
        behindTheScenes: [],
        clip: [],
        trailer: [],
        blooper: []
    })

    return (
        <div>
            <ButtonGroup variant={"text"}>
                {!!reduce.trailer.length && <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => setTypeOfVideos("Trailer")}>Trailers</Button>}
                {!!reduce.teaser.length && <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => setTypeOfVideos("Teaser")}>Teasers</Button>}
                {!!reduce.clip.length && <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => setTypeOfVideos("Clip")}>Clips</Button>}
                {!!reduce.behindTheScenes.length && <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => setTypeOfVideos("Behind the Scenes")}>Behind The Scenes</Button>}
                {!!reduce.featurette.length && <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => setTypeOfVideos("Featurette")}>Featurettes</Button>}
                {!!reduce.blooper.length && <Button style={{color: isDarkMode ? "white" : "#1976d2", borderColor: isDarkMode ? "white" : "#1976d2"}} onClick={() => setTypeOfVideos("Blooper")}>Bloopers</Button>}
            </ButtonGroup>
            <div className={css.Videos}>
                {typeOfVideos === "Trailer" && reduce.trailer.map(video => <Video key={video.id} video={video}/>)}
                {typeOfVideos === "Teaser" && reduce.teaser.map(video => <Video key={video.id} video={video}/>)}
                {typeOfVideos === "Clip" && reduce.clip.map(video => <Video key={video.id} video={video}/>)}
                {typeOfVideos === "Behind the Scenes" && reduce.behindTheScenes.map(video => <Video key={video.id} video={video}/>)}
                {typeOfVideos === "Featurette" && reduce.featurette.map(video => <Video key={video.id} video={video}/>)}
                {typeOfVideos === "Blooper" && reduce.blooper.map(video => <Video key={video.id} video={video}/>)}
            </div>
        </div>
    );
};

export {VideosPage};