import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {Person} from "../Person";

const Persons:FC = () => {
    const {persons} = useAppSelector(state => state.personReducer);
    return (
        <div>
            {persons.slice(0, 10).map(person => <Person key={person.id} person={person}/>)}
        </div>
    );
};

export {Persons};