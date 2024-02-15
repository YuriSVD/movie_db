import React, {FC} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
//import css from "./Pagination.module.css"
import {Pagination, Stack} from "@mui/material";
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
        /*<div className={css.PaginationDiv}>
            <button disabled={page === 1} onClick={() => {
                dispatch(movieActions.pagination(1))
            }}>{"<<"}</button>
            <button disabled={page < 2} onClick={() => {
                dispatch(movieActions.pagination(page - 1));
            }}>{"<"}</button>
            <div>{page}</div>
            <button disabled={page === totalPages} onClick={() => {
                dispatch(movieActions.pagination(page + 1));
            }}>{">"}</button>
            <button disabled={page === totalPages} onClick={() => {
                dispatch(movieActions.pagination(totalPages));
            }}>{">>"}</button>
        </div>*/
    );
};

export {PaginationComponent};