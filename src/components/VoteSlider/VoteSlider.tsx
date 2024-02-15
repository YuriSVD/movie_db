import React, {FC, useState} from 'react';
import {Slider, styled} from "@mui/material";

import css from "./VoteSlider.module.css";

const VoteSlider: FC = () => {
    const minDistance = 0.5;
    const [value, setValue] = useState<number[]>([0, 10]);
    const CustomSlider = styled(Slider)(() => ({

    }))
    const marks = [
        {
            value: 0,
            label: 0
        },
        {
            value: 2.5,
            label: 2.5
        },
        {
            value: 5,
            label: 5
        },
        {
            value: 7.5,
            label: 7.5
        },
        {
            value: 10,
            label: 10
        }
    ]
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 10 - minDistance);
                setValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
            }
        } else {
            setValue(newValue as number[]);
        }
    };

    return (
        <Slider
            getAriaLabel={() => "Minimum distance shift"}
            value={value}
            max={10}
            step={0.5}
            marks={marks}
            onChange={handleChange}
            valueLabelDisplay="auto"
            disableSwap
        />
    );
};

export {VoteSlider};