import {FormControlLabel} from "@mui/material";
import React, {FC} from 'react';
import {useDispatch} from "react-redux";

import {switchActions} from "../../redux";
import {Switcher} from "./Switcher.slyled"

const ThemeSwitcher: FC = () => {
    const dispatch = useDispatch();
    const theme = localStorage.getItem("themeMode");
    if (theme) {
        if (!document.body.className) {
            document.body.classList.add(theme);
            dispatch(switchActions.changeMode());
        }
    }
    return (
        <FormControlLabel
            control={<Switcher sx={{m: 1}} defaultChecked/>}
            label=""
            onChange={() => {
                document.body.classList.toggle("darkTheme");
                console.log(document.body.className);
                localStorage.setItem("themeMode", document.body.className);
                dispatch(switchActions.changeMode());
            }}
        />
    );
};

export {ThemeSwitcher};