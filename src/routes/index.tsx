import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import BranchView from "../components/BranchView/BranchView";
import React from "react";
import LoginPage from "../pages/LoginPage";
import AuthHoc from "../components/Authhoc/AuthHoc";
import ArticleEditor from "../components/ArticleEditor/ArticleEditor";

interface IRoute {
    path: string
    component: React.ReactNode
}



export const routes: IRoute[] = [
    {path: '/node/:slug/show_branch', component: <BranchView/>},
    {path: '/*', component: <NotFoundPage/>},
    {path: '', component: <AuthHoc><Home/></AuthHoc>},
    {path: '/login', component: <LoginPage/>},
    {path: '/create', component: <AuthHoc><ArticleEditor/></AuthHoc>},
]




export const CreatePathToBranch = (slug:string):string=>{
    return '/node/'+slug+'/show_branch'
}