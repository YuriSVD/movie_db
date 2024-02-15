import React, {FC, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {alpha, AppBar, Box, Button, InputBase, styled, Toolbar, Typography} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
//import {Search} from "@mui/icons-material";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const Header: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef<string>(null);
    const Search = styled('form')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
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
                        <Button color="inherit" onClick={() => {
                            navigate("/genres");
                        }}>Genres</Button>
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
                            <StyledInputBase
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