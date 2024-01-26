import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import {Search} from "@mui/icons-material";
const Header:FC = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <MovieIcon/>
                    <Typography color="inherit" variant="h6" component="a" href="/home">TMBD</Typography>
                    <Button></Button>
                    <Button color="inherit" onClick={() => {
                        navigate("/movies");
                    }}>Movies</Button>
                    <Button color="inherit" onClick={() => {
                        navigate("/genres");
                    }}>Genres</Button>
                    <Search>
                        <SearchIcon/>
                    </Search>
                    {/*<Link to={"/home"}>Home</Link>
                    <Link to={"/movies"}>Movies</Link>
                    <Link to={"/genres"}>Genres</Link>*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export {Header};