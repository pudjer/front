import SearchComponent from "../Search/SearchComponent";
import {NavLink, useLocation} from "react-router-dom";
import {logout} from "../../store/reducers/userReducer";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {onSelect} from "../Search/SearchBranch/SearchRes";
import {searchBranches} from "../../services/SearchApi/SearchApi";
import Label from "../Search/SearchBranch/Label";

const Header = () =>{
    const dispath = useAppDispatch()
    const auth = useAppSelector(state => state.auth)
    const loc = useLocation()

    return <>
        <SearchComponent onSelect={onSelect} searchItems={searchBranches} item={Label}/>
        <NavLink to={'/create'}>create</NavLink>
        {auth.isAuthenticated ?
            <button onClick={async () =>{dispath(logout())}}>logout</button>
            :
            <NavLink to={'/login'} state={{from: loc.pathname }}>login</NavLink>}
    </>
}
export default Header;