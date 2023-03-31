import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {anonroutes, authroutes} from "./index";
import {useAppSelector} from "../hooks/redux";


function AppRouter(){
    const isAuth = useAppSelector(store => store.auth.isAuthenticated)
    return <BrowserRouter>
            <Routes>
                {isAuth && authroutes.map((route, index) => <Route
                    key={index} Component={route.component} path={route.path}/>)}
                {!isAuth && anonroutes.map((route, index) => <Route
                    key={index} Component={route.component} path={route.path}/>)}
            </Routes>
        </BrowserRouter>
}

export default AppRouter;