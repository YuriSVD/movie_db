import React, {FC} from 'react';
import {Pagination, Stack} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const PaginationComponent: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.switchReducer);
    const {totalPages} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(movieActions.pagination(page))
    }
    return (
        <>
            {totalPages &&
                <Stack>
                    <Pagination count={totalPages}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    button: {color: isDarkMode ? "white" : "#1976d2"},
                                    div: {color: isDarkMode ? "white" : "#1976d2"}
                                }}
                                size={"large"}
                                shape="rounded"
                                color="primary"
                                showFirstButton
                                showLastButton
                                onChange={handlePageChange}
                    />
                </Stack>}
        </>
    );
};

export {PaginationComponent};