import {Typography} from "@mui/material";
import React, {FC} from 'react';

import {CrewMember} from "../CrewMember";
import {useAppSelector} from "../../hooks";

const CrewMembers:FC = () => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    const {crewMembers} = useAppSelector(state => state.personReducer);

    const reduce = crewMembers.reduce((accumulator, crewMember) => {
        switch (crewMember.department) {
            case "Art":
                accumulator.art.push(crewMember);
                break;
            case "Camera":
                accumulator.camera.push(crewMember);
                break;
            case "Costume & Make-Up":
                accumulator.costume.push(crewMember);
                break;
            case "Crew":
                accumulator.crew.push(crewMember);
                break;
            case "Directing":
                accumulator.directing.push(crewMember);
                break;
            case "Editing":
                accumulator.editing.push(crewMember);
                break;
            case "Lighting":
                accumulator.lighting.push(crewMember);
                break;
            case "Production":
                accumulator.production.push(crewMember);
                break;
            case "Sound":
                accumulator.sound.push(crewMember);
                break;
            case "Visual Effects":
                accumulator.visualEffects.push(crewMember);
                break;
            case "Writing":
                accumulator.writing.push(crewMember);
                break;
        }
        return accumulator;
    }, {
        art: [],
        camera: [],
        costume: [],
        crew: [],
        directing: [],
        editing: [],
        lighting: [],
        production: [],
        sound: [],
        visualEffects: [],
        writing: []
    });
    return (
        <div>
            <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h5"}>Crew</Typography>
            {!!reduce.art.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Art</Typography>}
            {reduce.art.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.camera.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Camera</Typography>}
            {reduce.camera.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.costume.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Costume</Typography>}
            {reduce.costume.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.crew.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Crew</Typography>}
            {reduce.crew.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.directing.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Directing</Typography>}
            {reduce.directing.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.editing.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Editing</Typography>}
            {reduce.editing.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.lighting.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Lighting</Typography>}
            {reduce.lighting.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.production.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Production</Typography>}
            {reduce.production.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.sound.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Sound</Typography>}
            {reduce.sound.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.visualEffects.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Visual Effects</Typography>}
            {reduce.visualEffects.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.writing.length && <Typography style={{color: isDarkMode ? "white" : "black"}} gutterBottom variant={"h6"}>Writing</Typography>}
            {reduce.writing.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
        </div>
    );
};

export {CrewMembers};