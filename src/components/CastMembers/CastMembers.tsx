import {Typography} from "@mui/material";
import React, {FC} from 'react';

import {CastMember} from "../CastMember";
import {useAppSelector} from "../../hooks";

const CastMembers:FC = () => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    const {actors} = useAppSelector(state => state.personReducer);
    return (
        <div>
            <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h5"}>Cast</Typography>
            {actors.map(actor => <CastMember key={actor.id} actor={actor}/>)}
        </div>
    );
};

export {CastMembers};