import React, {FC} from 'react';
import {ICrewMember} from "../../interfaces";

interface IProps {
    crewMember: ICrewMember;
}

const CrewMember:FC<IProps> = () => {
    return (
        <div>
            crew member
        </div>
    );
};

export {CrewMember};