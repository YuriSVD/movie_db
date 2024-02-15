import React, {FC} from 'react';
import {Rating} from "@mui/material";
import {StarBorder} from "@mui/icons-material";
import css from "../Movie/Movie.module.css";

interface IProps {
    rating: number
}
const RatingStar:FC<IProps> = ({rating}) => {
    return (
        <div className={css.ratingDiv}>
            <Rating name={"rating star"}
                    value={rating}
                    precision={0.1}
                    max={10}
                    size={"small"}
                    emptyIcon={<StarBorder sx={{color: "white"}} fontSize={"inherit"}/>}
                    readOnly/>
            <div className={css.rating}>{rating.toFixed(1)}</div>
        </div>
    );
};

export {RatingStar};