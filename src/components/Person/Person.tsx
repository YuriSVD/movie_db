import React, {FC} from 'react';
import {IPerson} from "../../interfaces";
import {posterURL, urls} from "../../configs";

interface IProps {
    person: IPerson;
}

const Person:FC<IProps> = ({person}) => {
    const {name, profile_path, character} = person;
    const imgPath = posterURL + urls.posterSize + profile_path;
    return (
        <div>
            <img src={imgPath} alt={name}/>
            <p>{name}</p>
            <p>{character}</p>
        </div>
    );
};

export {Person};