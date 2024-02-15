import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {Video} from "../Video";

const Videos:FC = () => {
    const {videos} = useAppSelector(state => state.movieReducer);
    return (
        <div>
            {/*{videos.map((video, index) => <Video key={video.id} video={video}/>)}*/}
        </div>
    );
};

export {Videos};