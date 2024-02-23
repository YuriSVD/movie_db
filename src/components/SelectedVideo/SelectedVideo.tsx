import React, {FC} from 'react';
import ReactPlayer from "react-player";
import {useDispatch} from "react-redux";

import {urls, youtubeURL} from "../../configs";
import {IVideo} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from "./SelectedVideo.module.css";

interface IProps {
    video: IVideo,
    index: number
}

const SelectedVideo: FC<IProps> = ({video, index}) => {
    const {numberOfVideo, activeVideo} = useAppSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const {key} = video;
    const changeStatus = () => dispatch(movieActions.setActiveVideo(!activeVideo));

    const hover = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (activeVideo) {
            return;
        }
        const shovingVideo = document.getElementsByClassName("SelectedVideo_active__Y67xB")[0] as HTMLElement;
        const currentVideo = event.target as HTMLElement;
        shovingVideo.classList.remove("SelectedVideo_active__Y67xB"); //
        currentVideo.parentElement.parentElement.classList.add("SelectedVideo_active__Y67xB");
    }

    return (
        <div onMouseEnter={(event) => hover(event)}
             className={index === numberOfVideo ? `${css.active} ${css.video}` : css.video}>
            <ReactPlayer
                onPlay={changeStatus}
                onPause={changeStatus}
                onEnded={changeStatus}
                controls={false}
                url={`${youtubeURL}${urls.watch}${key}`}
            />
        </div>
    );
};

export {SelectedVideo};