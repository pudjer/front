import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import BranchView from "../components/BranchView/BranchView";

export const routes = [
    {path: '/home', component: Home},
    {path: '/node/:slug/show_branch', component: BranchView},
    {path: '/*', component: NotFoundPage},

]

export const CreatePathToBranch = (slug:string):string=>{
    return '/node/'+slug+'/show_branch'
}