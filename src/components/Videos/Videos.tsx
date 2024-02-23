import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import {SelectedVideo} from "../SelectedVideo";
import {Button, Typography} from "@mui/material";
import {movieActions} from "../../redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import css from "./Videos.module.css";

const Videos: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    const {videos, movieDetails} = useAppSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const selectedVideo = videos.slice(0, 18);
    const navigate = useNavigate();
    dispatch(movieActions.setNumberOfVideo(selectedVideo.length - 1));
    return (
        <div>
            <Typography style={{color: isDarkMode ? "white" : "black"}} variant={"h5"}>Videos</Typography>
            <div style={{display: "flex"}}>
                <div className={css.videos}>
                    {selectedVideo.map((video, index) => <SelectedVideo key={video.id} video={video} index={index}/>)}
                </div>
                <Button style={{color: isDarkMode ? "white" : "#1976d2"}} onClick={() => {
                    navigate(`/movies/${movieDetails.id}/videos`)
                }}>{<KeyboardArrowRightIcon/>}</Button>
            </div>
        </div>
    );
};

export {Videos};