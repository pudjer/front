import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import BranchView from "../components/BranchView/BranchView";
import Login from "../components/Login";

export const routes = [
    {path: '/node/:slug/show_branch', component: BranchView},
    {path: '/*', component: NotFoundPage},
    {path: '', component: Home},
]

export const anonroutes = [
    ...routes,
]

export const authroutes = [
    ...routes,

]




export const CreatePathToBranch = (slug:string):string=>{
    return '/node/'+slug+'/show_branch'
}