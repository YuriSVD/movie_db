import React, {FC} from 'react';
import {IVideo} from "../../interfaces";
import ReactPlayer from "react-player";
import {urls, youtubeURL} from "../../configs";

interface IProps {
    video: IVideo
}
const Video:FC<IProps> = ({video}) => {
    const {key} = video;
    return (
        <ReactPlayer controls={true}
                     url={`${youtubeURL}${urls.watch}${key}`}
        />
    );
};

export {Video};