import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {routes} from "./index";

function AppRouter() {

    return <BrowserRouter>
            <Routes>
                {routes.map((route, index) => <Route
                    key={index} Component={route.component} path={route.path}/>)}
            </Routes>
        </BrowserRouter>
}

export default AppRouter;