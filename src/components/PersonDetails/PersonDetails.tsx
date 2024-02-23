import {Typography} from "@mui/material";
import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {posterURL, urls} from "../../configs";
import DummyPhoto from "../../dummy_photos/dummy-person.jpg";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {personActions} from "../../redux";

const PersonDetails:FC = () => {
    const {personId} = useParams();
    const {personDetails} = useAppSelector(state => state.personReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(personActions.getPersonDetails({personId}));
    }, [personId, dispatch]);
    return (
        <>
            {personDetails && <div>
                <img src={personDetails.profile_path === null ? DummyPhoto : posterURL + urls.w300PosterSize + personDetails.profile_path} alt=""/>
                <Typography variant="h3">{personDetails.name}</Typography>
                <Typography align={"justify"} variant="subtitle1">{personDetails.biography}</Typography>
            </div>}
        </>
    );
};

export {PersonDetails};