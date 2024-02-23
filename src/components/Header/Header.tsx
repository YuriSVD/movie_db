import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import React, {FC, useRef} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux";
import {SearchIconWrapper, StyledInputBaseStyled, Search} from "./index";
import {ThemeSwitcher} from "../ThemeSwitcher";

const Header: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef<string>(null);

    return (
        <Box>
            <AppBar style={{background: "#00143C"}} position="static">
                <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                    <Box style={{display: "flex", alignItems: "center"}}>
                        <Button color="inherit" onClick={() => {
                            navigate("/home");
                        }}>
                            <MovieIcon/>
                            <Typography color="inherit" variant="h6" component="p">TMBD</Typography>
                        </Button>
                        <Button color="inherit" onClick={() => {
                            navigate("/movies");
                        }}>Movies</Button>
                        <Search onSubmit={(event) => {
                            event.preventDefault();
                            if (inputRef.current) {
                                dispatch(movieActions.setSearchingTitle(inputRef.current));
                                navigate("/search");
                            }
                        }}>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBaseStyled
                                placeholder="Search..."
                                inputProps={{"aria-label": "search"}}
                                onChange={(event) => {
                                    inputRef.current = event.target.value;
                                }}
                            />
                        </Search>
                    </Box>
                    <ThemeSwitcher/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export {Header};