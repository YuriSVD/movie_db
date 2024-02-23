import React, {FC} from 'react';
import ReactPlayer from "react-player";

import {urls, youtubeURL} from "../../configs";
import {IVideo} from "../../interfaces";
import css from "./Video.module.css";

const Video: FC<IProps> = ({video}) => {
    const {key} = video;
    return (
        <div className={css.Video}>
            <ReactPlayer
                url={`${youtubeURL}${urls.watch}${key}`}
                controls={true}/>
        </div>
    );
};

interface IProps {
    video: IVideo;
}

export {Video};