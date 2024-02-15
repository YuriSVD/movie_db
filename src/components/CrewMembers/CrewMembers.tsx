import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {CrewMember} from "../CrewMember";

const CrewMembers:FC = () => {
    const {crewMembers} = useAppSelector(state => state.personReducer);
    return (
        <div>
            {crewMembers.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
        </div>
    );
};

export {CrewMembers};