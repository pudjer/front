import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {routes} from "./index";
import Layout from "../components/Layout";


function AppRouter(){
    return <BrowserRouter>
            <Routes>
                <Route element={<Layout/>} path={""}>
                    {routes.map((route, index) => <Route
                        key={index} element={route.component} path={route.path}/>)}

                </Route>
            </Routes>
        </BrowserRouter>
}

export default AppRouter;