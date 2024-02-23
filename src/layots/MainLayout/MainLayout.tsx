import React, {FC} from 'react';
import {Header} from "../../components";
import {Outlet} from "react-router-dom";
import css from "./MainLayout.module.css"

const MainLayout:FC = () => {
    return (
        <div className={css.MainLayout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};