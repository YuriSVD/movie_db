import React, {FC} from 'react';

import {CastMembers, CrewMembers} from "../../components";
import css from "./CastPage.module.css";

const CastPage:FC = () => {
    return (
        <div className={css.CastAndCrewBlock}>
            <CastMembers/>
            <CrewMembers/>
        </div>
    );
};

export {CastPage};